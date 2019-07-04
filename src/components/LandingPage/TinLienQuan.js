import React from "react";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import { NavLink } from "react-router-dom";

export default class TinLienQuan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8089/post/";
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(json => {
                this.setState({
                    data: json.data.content
                });
            })
            .catch(error => {
                console.log('Fetch Error :-S', error);
            })
    }

    onNewClick() {
        console.log("object");
    }

    handleDataCallback(txtMsg) {
        alert(txtMsg);
    }

    render() {
        const { data } = this.state;
        const dataList = data.map((item, index) => {
            const image = item.image;

            return <NavLink key={index} to={`/tin-tuc/${item.id}`} >
                <div className="pr-3 pl-3 d-flex">
                    <Card>
                        <CardBody className="text-center pt-5 pb-5">
                            <div>
                                <img className="card-img-left" src={`data:image/jpeg;base64,${image}`} alt="Card cap" />
                                <br />
                                <br />
                                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">{item.title}</h5>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </NavLink>
        });
        return (
            <Row>
                <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                    <h1>Tin tức khác</h1>
                </Colxx>
                <Colxx xxs="12" className="p-0 review-carousel">

                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            768: 2,
                            1200: 3,
                            1440: 4
                        }}
                        loop={false}>
                        {dataList}
                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}
