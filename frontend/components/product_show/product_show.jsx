import React from 'react';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }

    handleEdit(event){
        event.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    render(){
        return (
            <div>
                
            </div>
        )
    };
}

export default ProductShow;