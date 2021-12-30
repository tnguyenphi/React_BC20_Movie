import React, { Component } from 'react'
import { actFetchDetailMovie } from './Modules/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

class DetailMoviePage extends Component {
    componentDidMount() {
        //lay id tu url cua browser
        // console.log(this.props);
        const { id } = this.props.match.params;
        // console.log(id);
        this.props.fetchData(id);
    }

    renderLichChieu = () => {
        const {data} = this.props;
        return data?.lichChieu.map((item)=>{
            return (
                <tr key={item.maLichChieu}>
                    <td>{item.thongTinRap.tenCumRap}</td>
                    <td>{item.thongTinRap.tenRap}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                    <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                    <td>
                        <Link  className='btn btn-success' to="/">Books</Link>
                    </td>
                </tr>
            )
        })

    }

    render() {
        const { data, loading } = this.props
        if (loading) return <div>Loading...</div>

        return (
            <div className="container">
                <h3>DetailMoviePage</h3>
                <div className="row">
                    <div className='col-md-6'>
                        <img className='img-fluid' src={data && data.hinhAnh} />
                    </div>
                    <div className='col-md-6'>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Tên Phim </td>
                                    <td>{data && data.tenPhim}</td>
                                </tr>
                                <tr>
                                    <td>Mo ta</td>
                                    <td>{data && data.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Ten Cum Rap </th>
                                    <th> Ten Rap </th>
                                    <th> Ngay Chieu </th>
                                    <th> Gio Chieu </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderLichChieu()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => {
            dispatch(actFetchDetailMovie(id))
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
