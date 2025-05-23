import {
  Text,
  View,
  StyleSheet,
  SectionList,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../../assets/logo.svg";
import Stroke from "../../../../assets/stroke.svg";
import Message from "../../../../assets/message.svg";
import Bookmark from "../../../../assets/Bookmark.svg";
import Point from "../../../../assets/points.svg";
import Heart from "../../../../assets/Heart.svg";
import Comment from "../../../../assets/Comment.svg";
import Splash from "../../../../assets/image.png";
import Share from "../../../../assets/Share.svg";
import foto from "../../../../assets/foto.png";
import foto2 from "../../../../assets/foto2.png";
import foto3 from "../../../../assets/foto3.png";
import foto4 from "../../../../assets/foto4.png";
import House from "../../../../assets/house.svg";
import Search from "../../../../assets/search.svg";
import Union from "../../../../assets/union.svg";
import Store from "../../../../assets/store.svg";

import { styles } from "../Home/styles";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOpt}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={styles.storys}>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <View style={styles.storiesCard} key={item.item.id}>
                <Image
                  source={item.item.photoURL}
                  style={styles.storiesCardImage}
                ></Image>
              </View>
            )}
          ></FlatList>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto2} />
              <Text style={styles.contentHeaderLeftText}>juliafS2</Text>
            </View>
            <Point />
          </View>
          <View>
            <Image source={Splash} />
          </View>
        </View>
        <View style={styles.contentFooter}>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={styles.contentFooterLeft}>
              <Heart />
              <Comment />
              <Share />
            </View>
            <Bookmark />
          </View>
          <View
            style={{
              marginTop: 15,
              gap: 5,
              paddingLeft: 8,
            }}
          >
            <Text
              style={{
                color: "#FFF",
              }}
            >
              -juliaf-S2 Good day!
            </Text>
            <Text
              style={{
                color: "#FFF",
              }}
            >
              {" "}
              View all 2 comments
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 10,
              }}
            >
              2 hours ago See Translation
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto} />
              <Text style={styles.contentHeaderLeftText}> João </Text>
            </View>
            <Point />
          </View>
          <View>
            <Image source={Splash} />
          </View>
        </View>
        <View style={styles.contentFooter}>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={styles.contentFooterLeft}>
              <Heart />
              <Comment />
              <Share />
            </View>
            <Bookmark />
          </View>
          <View
            style={{
              marginTop: 15,
              gap: 5,
              paddingLeft: 8,
            }}
          >
            <Text
              style={{
                color: "#FFF",
              }}
            >
              Fernandinha123 Oi mundo
            </Text>
            <Text
              style={{
                color: "#FFF",
              }}
            >
              {" "}
              View all 3 comments
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 10,
              }}
            >
              3 hours ago See Translation
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.rodape}>
        <House />
        <Search />
        <Union/>
        <Store/>
        <Image style={{width:30, height:30}}source={foto4}/>
      </View>
    </View>
  );
}
