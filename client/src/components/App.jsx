import React, { Component } from 'react';
import styled from 'styled-components';
import API from '../services/index';
import Slider from './slider/Slider';
import SideMenu from './side-menu/SideMenu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentImgIndx: 0,
    };
    this.handlePrevImg = this.handlePrevImg.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
    this.handleDisplayImage = this.handleDisplayImage.bind(this);
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    API.getProduct(randomProductId)
      .then((data) => (this.setState({ data  : data.images  }))) // comment back in to use new db setup
      .catch((err) => {
        throw Error(err);
      });
  }


  handlePrevImg() {
    const { data, currentImgIndx } = this.state;
    const lastIndx = data.length - 1;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({ currentImgIndx: index });
  }


  handleNextImg() {
    const { data, currentImgIndx } = this.state;
    const lastIndx = data.length - 1;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;

    this.setState({ currentImgIndx: index });
  }

  handleDisplayImage(e) {
    this.setState({ currentImgIndx: Number(e.target.id) });
  }

  render() {
    const { data, currentImgIndx } = this.state;
    return (
      <>
        {data.length
          ? (
            <S.AppContainer>
              <S.MainPhoto>
                <S.SliderContainer>
                  <Slider
                    handlePrevImg={this.handlePrevImg}
                    handleNextImg={this.handleNextImg}
                    imgURL={data[currentImgIndx].image_url}
                    data={data}
                    handleDisplayImage={this.handleDisplayImage}
                  />
                </S.SliderContainer>
              </S.MainPhoto>
              <S.SideContainer>
                <SideMenu
                  data={data}
                  handlePrevImg={this.handlePrevImg}
                  handleNextImg={this.handleNextImg}
                  handleDisplayImage={this.handleDisplayImage}
                />
              </S.SideContainer>
            </S.AppContainer>
          )
          : <p>loading</p>}
      </>
    );
  }
}

const S = {};

S.AppContainer = styled.div`
  width: 100vh;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 10px;
  padding: 10px;
`;

S.MainPhoto = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 1;

`;

S.SliderContainer = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  margin: 20px;
`;

S.SideContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: grid;
  width: 250px;
`;
