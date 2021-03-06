import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topImg: {
    width: 365,
    height: 276,
    backgroundColor: "#c4c4c4",
    overflow: "hidden",
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 55,
    position: "relative",
    right: 0,
    alignContent: "flex-end",
    marginTop: -25,
    marginHorizontal: 250,
  },
  description: {
    width: 362,
    height: 575,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    marginTop: -19,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#171717",
  },
  ratingStar: {
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
    marginRight: 5,
  },

  reviews: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#bebbb2",
  },
  disc: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 23.5,
    textAlign: "justify",
    color: "#565551",
  },
  tab1:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "#000000",
    borderBottomColor: "#4b30f1",
    borderBottomWidth:2,
    
  },
  tabs:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.67,
    textAlign: "center",
    color: "#000000"
  },
  hotellistContainer: {
    marginTop: 19,
    width: 144,
    height: 205,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    marginBottom: 20,
    marginRight:8,
    elevation:8,
    marginHorizontal:5,
  },
  topHotel: {
    width: 144,
    height: 121,
    backgroundColor: "#c4c4c4",
  },
  detaiContainer: {
    padding: 10,
  },
  h1: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#413d3d",
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#969393",
  },
});
