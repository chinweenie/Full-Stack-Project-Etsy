import React from 'react';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[category_id]', this.state.categoryId);
        if (this.state.id){
            formData.append('product[id]', this.state.id);
        };

        let {imageUrls} = this.state;
        for (let i = 0; i < imageUrls.length; i++){
            formData.append('product[images][]', imageUrls[i]);
        }
        
        this.props.action(formData).then(action => (
            this.props.history.push(`/products/${action.product.id}`)
        ));
    }

    handleFile(event){
        event.preventDefault();
        
        if (this.state.imageFiles.length === 5) {
            alert('Oops, maximum number of images reached!');
            return;
        };

        let files = Array.from(event.target.files)
        let length = files.length;
        if (length < 5) {
            for (let i = 0; i < length; i++){
                let fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        imageFiles: [...this.state.imageFiles, files[i]],
                        imageUrls: [...this.state.imageUrls, fileReader.result]
                    })
                };
                fileReader.readAsDataURL(files[i])
            }
        } else if (length === 5){
            for (let i = 0; i < 5; i++) {
                let fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        imageFiles: [...this.state.imageFiles, files[i]],
                        imageUrls: [...this.state.imageUrls, fileReader.result]
                    })
                };
                fileReader.readAsDataURL(files[i])
            }
        } else {
            alert('Number of files exceeded, upload 5 pictures only!');
            return;
        };

        
    };

    update(field) {
        return (event) => {
            this.setState({[field]: event.target.value});
        }
    }

    handleClearAll(event){
        event.preventDefault();
        return this.setState({imageFiles: [], imageUrls: []});
    }

    render(){

        let {errors} = this.props;

        const previews = this.state.imageUrls.map(url => {
            return (
                <img key={url} src={url}/>
            );
        });

        return (
            <form onSubmit={this.handleSubmit} className="product-form">

                <div className="product-errors">
                    {errors}
                </div>

                <div className="product-images">
                    <h3>Photos</h3>
                    <ul >
                        <li className="first-preview">
                            {previews[0]}
                        </li>
                        <li className="second-preview">
                            {previews[1]}
                        </li>
                        <li className="third-preview">
                            {previews[2]}
                        </li>
                        <li className="forth-preview">
                            {previews[3]}
                        </li>
                        <li className="fifth-preview">
                            {previews[4]}
                        </li>
                            
                    </ul>
                    <button onClick={this.handleClearAll}>Clear all</button>
                    <input type="file" onChange={this.handleFile} multiple/>
                    <p>You can upload up to 5 pictures of the product</p>
                </div>

                <div className="listing-details">
                    <h3>Listing details</h3>
                    
                    <br/>
                    <label htmlFor="title">Title</label>
                    <br/>
                    <input type="text" value={this.state.title} id="title" onChange={this.update('title')} />


                    <label htmlFor="description">Description</label>
                    <textarea id="description" value={this.state.description} onChange={this.update('description')} cols="30" rows="10"></textarea>

                    <label htmlFor="category">Category</label>
                    <select value={this.state.categoryId} id="category" onChange={this.update('categoryId')}>
                        <option value={41}>Jewelry & Accessories</option>
                        <option value={42}>Clothing & Shoes</option>
                        <option value={43}>Home & Living</option>
                        <option value={44}>Wedding & Party</option>
                        <option value={45}>Toys & Entertainment</option>
                        <option value={46}>Art & Collectibles</option>
                        <option value={47}>Craft Supplies & Tools</option>
                    </select>

                </div>
               

                <div className="inventory-pricing">
                    <h3>Inventory and pricing</h3>

                    <label htmlFor="price">Price</label>
                    <input type="number" value={this.state.price} id="price" onChange={this.update('price')} />

                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" value={this.state.quantity} id="quantity" onChange={this.update('quantity')} />
                </div>

                <button className="clicky">Save and continue</button>
            </form>
        );
    }
};

export default ProductForm;