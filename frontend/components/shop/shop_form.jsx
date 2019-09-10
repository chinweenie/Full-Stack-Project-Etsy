import React from 'react';
import {withRouter} from 'react-router-dom';

class ShopForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.shop;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('shop[name]', this.state.name);
        formData.append('shop[owner_id]', this.state.owner.id);

        if (this.state.id){
            formData.append('shop[id]', this.state.id);
        };

        formData.append('shop[owner_id]', this.state.owner.id);

        if (this.state.imageFile) {
            formData.append('shop[shop_image]', this.state.imageFile);
        };

        this.props.action(formData).then(action => {
            this.props.history.push(`/shops/${action.shop.id}`)
        }).then(() => this.props.fetchAllUsers());
        
    }

    update(field) {
        return event => {
            this.setState({[field]: event.target.value});
        };
    };

    handleFile(event) {
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result});
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const preview = this.state.imageUrl
            ? <img src={this.state.imageUrl}/>
            : null;
        let { errors } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="shop-form">

                <div className="shop-errors">
                    {errors}
                </div>
                
                <div className="shop-name">
                    <label htmlFor="name">
                        Name your shop
                        <p>Choose a memorable name that reflects your style.</p>
                    </label>
                    <br/>
                    
                    <div className="shop-name-input">
                        <input
                            required
                            type="text"
                            value={this.state.name}
                            id="name"
                            onChange={this.update('name')} />
                        <p>Your shop name will appear in your shop 
                            and next to each of your listings throughout 
                            Etsy. After you open your shop, you still can
                            change your name. </p>
                    </div>
                   
                </div>
                <br/>
                <div className="shop-image-upload">
                    <label htmlFor="shop-image">Add your shop's logo here</label>
                    <p>After you open your shop, you still can change your logo.</p>
                    <br/>

                    <div className="image-preview">
                        {preview}
                    </div>

                    <input type="file" id="shop-image" onChange={this.handleFile}/>
                </div>

                

                <button className="clicky" id="save-shop">Save and continue</button>

            </form>
        )

    }

}

export default withRouter(ShopForm);