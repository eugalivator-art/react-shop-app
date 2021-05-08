import React from "react";
import { RouteComponentProps } from "react-router";
import Column from "../components/Column";
import Row from "../components/Row";
import ProductService from "../services/ProductService";

class ProductDetail extends React.Component<RouteComponentProps> {
  async componentDidMount() {
    try {
      const params: any = this.props.match.params;
      const { data } = await ProductService.getProductById(params.id);
      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    return (
      <Row>
        <Column size={12}>
          <h1>Product Detail</h1>
        </Column>
      </Row>
    );
  }
}
export default ProductDetail;
