import React from 'react';
import {PRODUCTS} from './mock';


export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inStock: false,
          filterText: ''
        }
        this.handleInStock = this.handleInStock.bind(this)
        this.handleText = this.handleText.bind(this)
    }    

    handleInStock(inStock) {
        this.setState({
            inStock: inStock
          });
    }

    handleText(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {
        return (
            <div>
                <SearchBar checked = {this.state.inStock} filterText = {this.state.filterText}
                 filterTextOnChange = {this.handleText} onChange = {this.handleInStock} />

                <ProductTable filterText = {this.state.filterText} inStock = {this.state.inStock} products = {PRODUCTS} />
            </div>
        )
    }
}

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInStock = this.handleInStock.bind(this);
        this.handleText = this.handleText.bind(this);
    }    

    handleInStock(event) {
        this.props.onChange(event.target.checked)
    }

    handleText(event) {
        this.props.filterTextOnChange(event.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" size="25" placeholder = {this.filterText} onChange = {this.handleText} />
                <p>
                    <input type="checkbox" checked = {this.props.inStock} onChange = {this.handleInStock} />
                    Somente produtos em estoque
                </p>
            </div>
        );
    }

}

export class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        const inStock = this.props.inStock;
        const filterText = this.props.filterText;
        return (
            this.props.products.forEach(product => {
                if (product.name.toLowerCase().indexOf(filterText) === -1) {
                    return; 
                }
                if (inStock && !product.stocked) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(
                        <ProductCategory category={product.category} key={product.category} />
                    )
                }
                rows.push(
                    <ProductRow product={product} key={product.name} />
                );
                lastCategory = product.category;
            }),
            <table width="210" >{rows}</table>
        )
    }
}

const ProductCategory = ({category})=> {
    // const category = this.category;
    return (
        <thead>
            <th className="category" colSpan="2">
                {category}
            </th>
        </thead>
    );
}

const ProductRow = ({product}) => {
        if (product.stocked) {
            return (
                <tr className="instock">
                    <td>{product.name}</td><td>{product.price}</td>
                </tr>
            )
        } else {
                return (
                    <tr className="notinstock">
                        <td>{product.name}</td><td>{product.price} </td>
                    </tr>
                )
            }
    

}