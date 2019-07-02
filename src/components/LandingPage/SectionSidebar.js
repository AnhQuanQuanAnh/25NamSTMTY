import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { NavLink } from "react-router-dom";

export default class SectionSidebar extends React.Component {

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

    render() {
        const { data } = this.state;
        const dataList = data.map((item, index) => {
            const image = item.image;

            return <NavLink key={index} to={`/tin-tuc/${item.id}`}>
                <Card className="flex-row mb-4">
                    <div className="w-30 position-relative">
                        <img className="card-img-left" src={`data:image/jpeg;base64,${image}`} alt="Card cap" />
                    </div>
                    <div className="w-70 d-flex align-items-center">
                        <CardBody>
                            <h3 className="mb-0">{item.title}</h3>
                        </CardBody>
                    </div>
                </Card>
            </NavLink>
        });

        return (
            <Fragment>
                <div className="side-bar-content">
                    <h2><IntlMessages id="cd.news.title" /></h2>
                    {dataList}
                </div>
            </Fragment>
        );
    }
}
