import React, { Component } from 'react';
import './style.css'

class Detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="detail__header">
                    <span>团购详情</span>
                    <i className="detail__headerIcon"></i>
                </div>
                <table className="detail__table">
                    <tbody>
                        <tr className="detail__row">
                            <th colSpan="3" className="detail__category">饮品</th>
                        </tr>
                        <tr className="detail__row">
                            <td>百香果（冷饮）</td>
                            <td className="detail__row--alignRight">1扎</td>
                            <td className="detail__row--alignRight">48元</td>
                        </tr>
                        <tr>
                            <td className="detail__td--price detail__td--alignRight">
                                最高价格
                                <br/>
                                <strong className="detail__td--priceNew">团购价</strong>
                            </td>
                            <td className="detail__td--price">
                                48元
                                <br/>
                                <strong className="detail__td--priceNew">19.9元</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="detail__remark">
                    免费提供餐巾纸
                </div>
                <div className="detail__more">
                    <span>更多图文详情</span>
                    <span className="detail__notice">(建议Wifi环境下打开，土豪请随意)</span>
                    <i className="detail__row"/>
                </div>
            </div>
        );
    }
}

export default Detail;