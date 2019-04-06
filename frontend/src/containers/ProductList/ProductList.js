import React, {Fragment, Component} from 'react'
import ProductCard from "../../components/ProductCard/ProductCard";
import {loadProducts} from "../../store/actions/product-list";
import {connect} from "react-redux";
import Select from 'react-select';
import {loadCategories} from "../../store/actions/categories";


class ProductList extends Component {
    componentDidMount() {
        this.props.loadProducts();
        this.props.loadCategories();
    }

    getCategoryOptions = () => {
        return this.props.categoryList.categories.map(category => {
            console.log(category);
            return {value: category.id, label: category.name}
        });
    };

    selectChanged = (value) => {

    };

    render() {
        const selectOptions = this.getCategoryOptions();
        return <Fragment>
            <Select className="mt-3" options={selectOptions} name='categories'
                    />
            <div className='row'>
                {this.props.productList.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-4' key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => {
    return {
        productList: state.productList,
        categoryList: state.categoryList
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts()),
    loadCategories: () => dispatch(loadCategories())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);