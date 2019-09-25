import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading_icon';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({}, {
            imageUrls: [],
            imageFiles: [],
        }, this.props.product);

        
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
        formData.append('product[shop_id]', this.state.shopId);
        formData.append('product[price]', this.state.price);
        formData.append('product[quantity]', this.state.quantity);

        if (this.state.id){
            formData.append('product[id]', this.state.id);
        };

        let {imageFiles} = this.state;
        
        if (imageFiles.length > 0) {
            for (let i = 0; i < imageFiles.length; i++) {
                formData.append('product[images][]', imageFiles[i]);
            }
        }
        
        this.props.action(formData).then(action => {
            this.props.history.push(`/shops/${this.state.shopId}/products/${action.product.id}`)
        });
    }

    handleFile(event){
        event.preventDefault();
        if (this.state.imageFiles.length === 5 || this.state.imageUrls.length === 5) {
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
        
        if (!errors){
            return <LoadingIcon/>
        }
        
        const errorsLi = errors.map(error => {
            return <li>{error}</li>
        })

        const development = (
            <select value={this.state.categoryId || ''} id="category" onChange={this.update('categoryId')}>
                {/* Development category id */}
                <option disabled hidden value=''>--Select a category--</option>
                <option value='56'>Jewelry & Accessories</option>
                <option value='57'>Clothing & Shoes</option>
                <option value='58'>Home & Living</option>
                <option value='59'>Wedding & Party</option>
                <option value='60'>Toys & Entertainment</option>
                <option value='61'>Art & Collectibles</option>
                <option value='62'>Craft Supplies & Tools</option>
                <option value='63'>Vintage</option>
            </select>
        );

        const production = (
            <select value={this.state.categoryId || ''} id="category" onChange={this.update('categoryId')}>
                <option disabled hidden value=''>--Select a category--</option>
                <option value='1'>Jewelry & Accessories</option>
                <option value='2'>Clothing & Shoes</option>
                <option value='3'>Home & Living</option>
                <option value='4'>Wedding & Party</option>
                <option value='5'>Toys & Entertainment</option>
                <option value='6'>Art & Collectibles</option>
                <option value='7'>Craft Supplies & Tools</option>
                <option value='8'>Vintage</option>
            </select>
        )


        return (
            <form onSubmit={this.handleSubmit} className="product-form">

                

                <div className="product-images">
                    <h3>Photos</h3>
                    <ul >
                        <div className="explanation">
                            <p>Use up to five photos to show your 
                                item's most important qualities.</p>
                                <ul>
                                    Tips:
                                    <li>Use natural light and no flash.</li>
                                    <li>Include a common object for scale.</li>
                                    <li>Show the item being held, worn, or used.</li>
                                    <li>Shoot against a clean, simple background.</li>
                                </ul>
                        </div>
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
                    <div className="images-input-button">
                        <button onClick={this.handleClearAll}>Clear all</button>
                        <input type="file" onChange={this.handleFile} multiple />
                        <p>You can upload up to 5 pictures of the product</p>
                    </div>
                    
                </div>

                <div className="listing-details">
                    <h3>Listing details</h3>
                    <p>Tell the world all about your item
                        and why they'll love it
                    </p>

                    <div className="product-errors">
                        <ul>
                            {errorsLi}
                        </ul> 
                    </div>
                    <br/>

                    <div className="title">
                        <div className="label-description">
                            <label htmlFor="title">Title *</label>
                            <p>
                                Include keywords that buyers would
                                use to search for your item.
                            </p>
                        </div>
                        
                        <input required type="text" value={this.state.title || ''} id="title" onChange={this.update('title')} />
                    </div>

                    <div className="description">

                        <div className="label-description">
                            <label htmlFor="description">Description *</label>
                            <p>
                                Start with a brief overview that describes your item’s finest features.
                                Shoppers will only see the first few lines of your description at first, so make it count!
                            </p>
                            <p>
                                Not sure what else to say? Shoppers also like hearing about your process, and the story
                                behind this item.
                            </p>
                        </div>
                        
                        <textarea id="description" value={this.state.description || ''} onChange={this.update('description')} cols="30" rows="10"></textarea>
                    </div>

                   <div className="category">

                       <div className="label-description">
                            <label htmlFor="category">Category *</label>
                            <p>Pick a category for your item</p>
                       </div>
                        
                        {/* {development} */}
                        {production}
                   </div>
                </div>
               

                <div className="inventory-pricing">
                    <h3>Inventory and pricing</h3>

                    <div className="price">
                        <div className="label-description">
                            <label htmlFor="price">Price *</label>
                            <p>Factor in the costs of materials and labor, plus any related business expenses.
                               Consider the total price buyers will pay too
                            </p>
                        </div>
                        <input required type="number" value={this.state.price || ''} id="price" onChange={this.update('price')} min="0.00" />
                    </div>

                    <div className="quantity">
                        <div className="label-description">
                            <label htmlFor="quantity">Quantity</label>
                            <p>
                                For quantities greater than one, 
                                this listing will renew automatically until it sells out.
                            </p>
                        </div>
                        <input required type="number" value={this.state.quantity || ''} id="quantity" onChange={this.update('quantity')} min="1" />
                    </div>
                    
                </div>
                <div className="sticky-bar">
                    <Link to={`/shops/${this.state.shopId}`}className="clicky">Cancel</Link>
                    <p><strong>This listing isn't active yet.</strong> It will be available to shoppers once you open your shop.</p>
                    <button className="clicky">Save and continue</button>
                </div>
                
            </form>
        );
    }
};

export default withRouter(ProductForm);