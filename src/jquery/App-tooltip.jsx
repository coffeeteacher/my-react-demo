import { useEffect } from 'react';

import $ from 'jquery';
import './App.css';

export default function App() {

    // 寫法2:建議的寫法
    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增html元素 => append()
        // 取得子元素 => children()

        $('a:has(.ttpShow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px'
            }).fadeIn('fast');
        }).on('mouseout', function () {
            $('#ttpPanel').remove();
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px'
            });
        })

        // $('a:has(.ttpShow)').mouseover(function (e) {            
        //     $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
        //     $('#ttpPanel').css({
        //         top: (e.pageY + 10) + 'px',
        //         left: (e.pageX + 10) + 'px'
        //     }).fadeIn('fast');
        // }).mouseout(function () {
        //     $('#ttpPanel').remove();
        // }).mousemove(function (e) {
        //     $('#ttpPanel').css({
        //         top: (e.pageY + 10) + 'px',
        //         left: (e.pageX + 10) + 'px'
        //     });
        // })
    }, [])


    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem, ipsum dolor sit amet
                <a href='#'>
                    consectetur
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
                adipisicing elit. Laborum similique, iste sed exercitationem illum provident incidunt iusto repellendus libero totam voluptatem praesentium voluptate reprehenderit eaque, numquam ex? Voluptatum et ullam modi. Dolores optio, veritatis quidem a rerum praesentium excepturi sint veniam incidunt. Molestiae fugit explicabo enim rerum obcaecati error, consequatur animi commodi sit in est dolorum eaque ratione, vero laboriosam inventore quisquam possimus expedita saepe delectus ab! Doloribus eos magni voluptas amet velit. Explicabo voluptate ab dicta nulla cum velit labore ratione quod eius suscipit nobis sed ex rem est quasi asperiores perferendis ipsum, quo, architecto consequatur. Aliquam, voluptates inventore quam distinctio nihil, non nobis, sit dolore quaerat consequatur temporibus dicta quas suscipit neque expedita accusamus dignissimos! Accusamus veniam eius ipsa et, dolorem similique. Excepturi, cumque facilis repellat laborum, nemo quam similique atque possimus, repudiandae itaque maiores quisquam iure officiis id tempora! Magnam quia
                <a href='#'>
                    autem
                    <span className='ttpShow'>
                        <img src="./images/03.jpg" alt="" style={{
                            width: '100px'
                        }} />
                    </span>
                </a>

                impedit sunt quos necessitatibus mollitia officiis eligendi nesciunt. Exercitationem, nisi accusamus enim laudantium quam officia neque, voluptatum esse, vero odio unde reiciendis distinctio molestiae blanditiis hic temporibus sit aspernatur ipsa. Vero expedita officiis eum recusandae
            </p>
        </>
    )
}