import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import {
  actFetchListMovie,
  actListMovieRequest,
  actListMovieSuccess,
  actListMovieFailed,
} from "./Modules/action";
import { connect } from "react-redux";
import Loading from "../../../components/Loading";

class ListMoviePage extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         loading: false,
  //         data: null,
  //         error: null,
  //     }
  // }

  componentDidMount() {
    this.props.fetchData();
    // // //set loading
    // // this.setState({
    // //     loading: true,
    // //     data: null,
    // //     error: null,
    // // });
    // this.props.listMovieRequest();
    // //call api
    // axios({
    //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //     method: "GET",
    // })
    //     .then((result) => {
    //         // console.log(result.data);
    //         // this.setState({
    //         //     loading: false,
    //         //     data: result.data,
    //         //     error: null,
    //         // })
    //         this.props.listMovieSuccess(result.data);
    //     })
    //     .catch((err) => {
    //         // this.setState({
    //         //     loading: false,
    //         //     data: null,
    //         //     error: err,
    //         // })
    //         this.props.listMovieFailed(err);
    //     })
  }
  renderListMovie = () => {
    return this.props.data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };
  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <div className="contrainer">
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  // return {
  //     listMovieRequest: () => {
  //         dispatch(actListMovieRequest());
  //     },

  //     listMovieSuccess : (data) => {
  //         dispatch(actListMovieSuccess(data))
  //     },

  //     listMovieFailed: (error) =>{
  //         dispatch(actListMovieFailed(error))
  //     },
  // }
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
