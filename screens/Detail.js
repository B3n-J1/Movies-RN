import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  View,
  Pressable,
  Modal,
} from "react-native";
import dateFormat from "dateformat";

import GeneralStarExample from "../components/StarRating";
import { getMovie, getMovieVideo } from "../services/services";
import VideoPlayer from "../components/Video";

const height = Dimensions.get("screen").height;
const placeholder = require("../assets/placeholder.png");
const Detail = ({ route, navigation }) => {
  const [movieDetail, setmovieDetail] = useState("");
  const [movieVideoData, setMovieVideoDetail] = useState("");
  const [loaded, setLoaded] = useState(false);
  const movieId = route.params.movieDetail.id;
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getMovie(movieId).then((movieData) => {
      setmovieDetail(movieData);
      setLoaded(true);
      setModalVisible(false);
    });
    getMovieVideo(movieId).then((movieVideoData) => {
      setMovieVideoDetail(movieVideoData);
    });
    console.log(movieVideoData);
  }, [movieId]);
  return (
    <>
      {loaded && (
        <ScrollView style={styles.cardContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/w500" +
                      movieDetail.poster_path,
                  }
                : placeholder
            }
          />
          <Text style={styles.title}>{movieDetail.title}</Text>
          {movieDetail.genres && (
            <View style={styles.genresContainer}>
              {movieDetail.genres.map((genre) => {
                return (
                  <Text style={styles.genre} key={genre.id}>
                    {genre.name}
                  </Text>
                );
              })}
            </View>
          )}
          <Text style={styles.textover}>
            Parution : {dateFormat(movieDetail.release_date, "d mmmm, yyyy")}
          </Text>
          <Text style={styles.textover}>Synopsis : {movieDetail.overview}</Text>
          <View style={styles.raitContainer}>
            <GeneralStarExample rating={movieDetail.vote_average} />
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <VideoPlayer data={movieVideoData} />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Fermer</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Voir le Trailer</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "black",
  },
  raitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  genresContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  image: {
    height: height / 2.5,
  },
  title: {
    color: "white",
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    fontSize: 20,
  },
  textover: {
    color: "white",
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    margin: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
