import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { styles } from "../Styles/details";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const DetailScreen = () => {
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require("../assets/Images/p6.jpg")}
          style={styles.topImg}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
              paddingHorizontal: 10,
              paddingRight: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </ImageBackground>
        <View style={styles.description}>
          <View>
            <Image
              style={styles.user}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              }}
            />
            <View style={{ marginHorizontal: 25 }}>
              <Text style={styles.heading}>North London</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 25,
                  alignItems: "center",
                }}
              >
                <Entypo name="star" size={15} color="#ffc40c" />
                <Entypo name="star" size={15} color="#ffc40c" />
                <Entypo name="star" size={15} color="#ffc40c" />
                <Entypo name="star" size={15} color="#ffc40c" />
                <Entypo name="star" size={15} color="#ffc40c" />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ratingStar}>5.0</Text>
                <Text style={styles.reviews}> &#124; 365 Reviews</Text>
              </View>
            </View>

            <View style={{ marginLeft: 25, marginTop: 25, marginRight: 25 }}>
              <Text style={styles.disc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                obcaecati eveniet possimus aut neque corrupti voluptas explicabo
                mollitia. Optio ratione similique laudantium natus a velit illum
                commodi tempora perferendis quas.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 25,
              }}
            >
              <Text style={styles.tab1}>Details</Text>
              <Text style={styles.tabs}>Reviews</Text>
              <Text style={styles.tabs}>Pricing</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.hotellistContainer}>
                <Image
                  source={require("../assets/Images/p4.jpg")}
                  style={styles.topHotel}
                />
                <View style={styles.detaiContainer}>
                  <Text style={styles.h1}>Karpenisiov</Text>
                  <Text style={styles.h2}>Safosad , Oila,Greece</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                  </View>

                  <Text>5</Text>
                </View>
              </View>
              <View style={styles.hotellistContainer}>
                <Image
                  source={require("../assets/Images/p3.jpg")}
                  style={styles.topHotel}
                />
                <View style={styles.detaiContainer}>
                  <Text style={styles.h1}>Karpenisiov</Text>
                  <Text style={styles.h2}>Safosad , Oila,Greece</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                  </View>

                  <Text>5</Text>
                </View>
              </View>
              <View style={styles.hotellistContainer}>
                <Image
                  source={require("../assets/Images/p5.jpg")}
                  style={styles.topHotel}
                />
                <View style={styles.detaiContainer}>
                  <Text style={styles.h1}>Karpenisiov</Text>
                  <Text style={styles.h2}>Safosad , Oila,Greece</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                  </View>

                  <Text>5</Text>
                </View>
              </View>
              
              <View style={styles.hotellistContainer}>
                <Image
                  source={require("../assets/Images/p6.jpg")}
                  style={styles.topHotel}
                />
                <View style={styles.detaiContainer}>
                  <Text style={styles.h1}>Karpenisiov</Text>
                  <Text style={styles.h2}>Safosad , Oila,Greece</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                    <Entypo name="star" size={15} color="#ffc40c" />
                  </View>

                  <Text>5</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
