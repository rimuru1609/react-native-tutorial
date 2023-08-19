import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  courseContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },

  
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_400Regular",
  },
});