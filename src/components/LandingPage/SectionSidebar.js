import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import VideoPlayer from "Components/VideoPlayer"
import Rating from "Components/Rating";
import { NavLink } from "react-router-dom";
import { cloneableGenerator } from "redux-saga/utils";

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
        console.log("data", data);
        const dataList = data.map((item, index) => {
            // Base64 string data
        const image = item.imagePath;
            return <Card key={index} className="flex-row mb-4">
                <div className="w-30 position-relative">
                    <img className="card-img-left" src={`data:image/jpeg;base64,${image}`} alt="Card cap" />
                </div>
                <div className="w-70 d-flex align-items-center">
                    <CardBody>
                        <NavLink to="/blog-detail">
                            <h3 className="mb-0"><IntlMessages id={item.title} /></h3>
                        </NavLink>
                    </CardBody>
                </div>
            </Card>
        });
        const videoJsOptions = {
            autoplay: false,
            controls: true,
            className: "video-js side-bar-video",
            poster: "/assets/img/landing-page/subpage-video-poster.jpg",
            sources: [{
                src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
                type: 'video/mp4'
            }]
        }

        return (
            <Fragment>
                <div className="side-bar-content">
                    <h2><IntlMessages id="cd.news.title" /></h2>
                    {dataList}
                </div>

                <div className="side-bar-content">
                    <h2><IntlMessages id="lp.sidebar.tour-title" /></h2>
                    <Card>
                        <CardBody className="p-0">
                            <div className="position-relative">
                                <VideoPlayer {...videoJsOptions} />
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div>
                    <h2><IntlMessages id="lp.sidebar.review-title" /></h2>
                    <Card>
                        <CardBody className="text-center pt-5 pb-5">
                            <div>
                                <img alt="review profile" className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail mx-auto" src="/assets/img/profile-pic-l-2.jpg" />
                                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3"><IntlMessages id="lp.reviews.review-name-3" /></h5>
                                <Rating total={5} rating={5} interactive={false} />
                                <p className="text-muted text-small"><IntlMessages id="lp.reviews.review-type-3" /></p>
                            </div>
                            <div className="pl-3 pr-3 pt-3 pb-0 flex-grow-1 d-flex align-items-center">
                                <p className="mb-0 detail-text">
                                    <IntlMessages id="lp.reviews.review-detail-3" />
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Fragment>
        );
    }
}
