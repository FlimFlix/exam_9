import React, {Component} from 'react'
import {loadProductDetail} from "../../store/actions/product-detail";
import {connect} from "react-redux";
import defaultImg from "../../components/UI/Card/default.png";
import './Product.css'

class ProductDetail extends Component {
    componentDidMount() {
        this.props.loadProductDetail(this.props.match.params.id);
    }

    render() {
        if (!this.props.product) return null;

        const {name, photo, description, receipt_date, price} = this.props.product;

        return <div className="product mt-4">
            <h2 className="title">{name} - {price}$</h2>
            <h4 className="center">Дата завоза: {receipt_date}</h4>
            <h4 className="center">Категория:
            {this.props.product.categories.map((category) => {
                return <span className="center" key={category}>{category.name}</span>
            })}</h4>
            <div className="row">
                {photo[0] ? photo.map((photo, id) => {
                        return (
                            <div className="col-md-4" key={id}>
                                <img className="card-detail" src={photo.photo} alt='image'/>
                            </div>
                        )
                    }) :
                    <img className="card-no" src={defaultImg} alt='image'/>}
            </div>
            {description ? <div className="description-box text-muted m-2">
                <p>{description}</p>
            </div> : null}
        </div>

    }
}

const mapStateToProps = state => state.productDetail;

const mapDispatchToProps = (dispatch) => ({
    loadProductDetail: (value) => dispatch(loadProductDetail(value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);