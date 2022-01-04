import React, { Component } from 'react';
import NhanVien from './NhanVien';
import SanPham from './SanPham';
import WrapperCard from './WrapperCard';

const WithSanPham = WrapperCard (SanPham);
const WithNhanVien = WrapperCard(NhanVien)
export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                {/* <NhanVien/> */}
                {/* <SanPham/> */}
                <WithSanPham/>
                <WithNhanVien/>
            </div>
        )
    }
}
