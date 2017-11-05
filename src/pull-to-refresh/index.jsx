import React from 'react'
import 'minirefresh/dist/debug/minirefresh.css'
import 'minirefresh/dist/debug/minirefresh.js'

import './index.css'

class PullToRefresh extends React.Component {
    componentDidMount() {
        const refresh = new window.MiniRefresh({
            container: '#minirefresh',
            down: {
                callback: function () {
                    setTimeout(() => {
                        refresh.endDownLoading();
                    },2000)
                }
            },
            up: {

                callback: function () {
                    // 上拉事件
                    setTimeout(() => {
                        refresh.endUpLoading(true);
                    },2000)
                }
            }
        });
    }

    render() {
        return (
            <div>
                <h3>下拉刷新111</h3>
                <div className="content">
                    <div id="minirefresh" className="minirefresh-wrap">
                        <div className="minirefresh-scroll">
                            <div className="list">
                                <p>11111111111111111111</p>
                                <p>11111111111111111111</p>
                                <p>11111111111111111111</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PullToRefresh