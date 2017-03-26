import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';

import resolveAssetSource from 'resolveAssetSource';


import styleUtil from '../../utils/styleUtil';

const { dw } = styleUtil;

const imageWidth = (dw - 20 * 2 - 10) / 3;

const imageHeight = (imageWidth * 297) / 200;


class MovieDetailCard extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const image2 = [];
    for (let i = 0; i < 10; i++) {
      if (i === 9) {
        image2.push(<View key={i} style={styles.image2}></View>)
      } else {
        image2.push(<View key={i} style={[styles.image2, {marginRight: 10}]}></View>)
      }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>金刚：骷髅岛</Text>
          <View style={styles.infoWrapper}>
            <View style={styles.basicInfo}>
              <View style={styles.ratingComments}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={3.5}
                  starSize={15}
                  starColor="#f5a623"
                />
                <Text style={styles.ratingNum}>6.8</Text>
                <Text style={styles.commentsNum}>25775人评价</Text>
              </View>
              <Text style={styles.textInfo}>
  119分钟 / 动作 / 奇幻 / 冒险 / 乔丹·沃格特-罗伯茨(导演) / 汤姆·希德勒斯顿 / 布丽·拉尔森 / 塞缪尔·杰克逊 / 约翰·古德曼 / 景甜 / 约翰·C·赖利 / 托比·凯贝尔 / 科里·霍金斯 / 汤姆·威尔金森 / 托马斯·曼 / 杰森·米切尔 / 谢伊·惠格姆 / 约翰·奥提兹 / 尤金·科德罗 / 2017-03-24(中国大陆) 上映
              </Text>
            </View>
            <View style={styles.image}>
            </View>
          </View>
          <View style={styles.summary}>
            <Text style={styles.secondTitle}>
              金刚：骷髅岛的剧情简介
            </Text>
            <Text style={styles.summaryDetail}>
  上世纪70年代，一支集结了科考队员、探险家、战地摄影记者、军人的探险队，冒险前往南太平洋上的神秘岛屿——骷髅岛。他们的到来惊扰了岛上之神——史上最大金刚。经过一番惨烈的激战之后，探险队员散落在了岛屿各处。此时，队员们才意识到这次探险并不是一次单纯的科考任务，而是去探索怪兽存在的证明。在这片与世隔绝、危险密布的丛林，无数怪异的史前生物暗藏其中，时刻威胁着他们的生命。队员们还遇到了神秘的原始部落，金刚的身世和其守护岛屿的原因也被逐渐揭开，原来，恐怖阴森的骷髅岛上还蛰伏着更凶狠残暴的怪兽……
            </Text>
          </View>
          <View style={styles.images}>
            <Text style={styles.secondTitle}>
              金刚：骷髅岛的预告片(40)和图片(364)
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {image2}
            </ScrollView>
          </View>
        </View>
    );
  }
}

export default MovieDetailCard;


const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 16,
    color: "#111"
  },
  infoWrapper: {
    flexDirection: "row"
  },
  basicInfo: {
    flex: 1,
    marginRight: 10
  },
  ratingComments: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 10
  },
  ratingNum: {
    paddingLeft: 4,
    paddingRight: 10,
    color: "#494949"
  },
  commentsNum: {
    color: "#aaa",
    fontSize: 12
  },
  textInfo: {
    color: "#494949",
    fontSize: 12
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: "green"
  },
  secondTitle: {
    paddingVertical: 10,
    color: "#aaa",
    fontSize: 15
  },
  summaryDetail: {
    color: "#494949",
    fontSize: 12
  },
  image2: {
    width: 200,
    height: 120,
    backgroundColor: "red"
  }
});
