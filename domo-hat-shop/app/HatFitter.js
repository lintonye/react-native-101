import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { connect } from "react-redux";
import Hat from "./Hat";
import Domo from "./Domo";
import styled from "styled-components";

const Container = styled.View`
  align-items: center;
`;

export class HatFitter extends Component {
  render() {
    const { hat, poseUri, poseWidth, poseHeight } = this.props;
    return (
      // <View>
      //   <Hat type={this.props.hat.hatKey} />
      //   <Image
      //     source={{ uri: poseUri }}
      //     style={{ width: poseWidth, height: poseHeight }}
      //   />
      // </View>
      <Container>
        <Domo hats={[hat]} index={0} poses={[{ uri: poseUri }]} poseIndex={0} />
      </Container>
    );
  }
}

const HatFitterScreen = props => {
  const { params } = props.navigation.state;
  const { uri, width, height } = params;
  return (
    <HatFitter {...props} poseUri={uri} poseWidth={width} poseHeight={height} />
  );
};

export default connect(({ core: { hats, index } }) => ({ hat: hats[index] }))(
  HatFitterScreen
);
