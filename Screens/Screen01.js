import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "../Styles/style";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'

const Screen01 = () => {
  return (
    <View style={{ marginTop: 50 }}>
      {/* Top Heading Section */}
      <View style={styles.top_header_contianer}>
        <View>
          <Text style={styles.text1}>Search for place</Text>
          <Text style={styles.text2}>Destination</Text>
        </View>
        <View>
          <Text style={styles.text3}>Hi, Nishant</Text>
        </View>
      </View>
      {/* End Top Heading Section */}

      <View style={{marginLeft:8,marginRight:0}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainer}
        >
          <View>
            <ImageBackground
              source={require("../assets/Images/p5.jpg")}
              style={styles.imageBackground}
            >
              <View style={styles.locationContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.user}
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
                    }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.hotelname}>Grand Orange Hotel</Text>
                    <Text style={styles.location}>London Street</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Entypo name="star" size={15} color="yellow" />
                  <Text style={styles.rating}>4.5</Text>
                </View>
              </View>

              {/* Bottom Content */}
            </ImageBackground>
            <View style={styles.bottomContainer}>
              <Text style={styles.bt1}>Mediterranean</Text>
              <Text style={styles.bt2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                explicabo laudantium, quasi consequuntur dolorum
              </Text>
            </View>
          </View>
          <View>
            <ImageBackground
              source={require("../assets/Images/p2.jpg")}
              style={styles.imageBackground}
            >
              <View style={styles.locationContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.user}
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
                    }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.hotelname}>Grand Orange Hotel</Text>
                    <Text style={styles.location}>London Street</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Entypo name="star" size={15} color="yellow" />
                  <Text style={styles.rating}>4.5</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.bottomContainer}>
              <Text style={styles.bt1}>Mediterranean</Text>
              <Text style={styles.bt2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                explicabo laudantium, quasi consequuntur dolorum
              </Text>
            </View>
          </View>
          <View>
            <ImageBackground
              source={require("../assets/Images/p6.jpg")}
              style={styles.imageBackground}
            >
              <View style={styles.locationContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.user}
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
                    }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.hotelname}>Grand Orange Hotel</Text>
                    <Text style={styles.location}>London Street</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Entypo name="star" size={15} color="yellow" />
                  <Text style={styles.rating}>4.5</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.bottomContainer}>
              <Text style={styles.bt1}>Mediterranean</Text>
              <Text style={styles.bt2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                explicabo laudantium, quasi consequuntur dolorum
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{marginLeft:8}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginRight:15,
          }}
        >
          <Text style={styles.recommended}>Recommended</Text>
          <Text style={styles.more}>More</Text>
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
                paddingLeft:10,
                paddingRight:10
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
                paddingLeft:10,
                paddingRight:10
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
                paddingLeft:10,
                paddingRight:10
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
                paddingLeft:10,
                paddingRight:10
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
      <View style={{marginLeft:8}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginRight:15,
          }}
        >
          <Text style={styles.recommended}>Popular</Text>
          <Text style={styles.more}>More</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                paddingLeft:10,
                paddingRight:10
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
              source={require("../assets/Images/p1.jpg")}
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
                paddingLeft:10,
                paddingRight:10
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
                paddingLeft:10,
                paddingRight:10
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
                paddingLeft:10,
                paddingRight:10
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
  );
};

export default Screen01;
