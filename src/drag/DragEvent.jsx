import React, { useState, useRef } from 'react'
import './drag.css'

const list = [
    {
        id: '1',
        text: '序列1'
    },
    {
        id: '2',
        text: '序列2'
    },
    {
        id: '3',
        text: '序列3'
    },
    {
        id: '4',
        text: '序列4'
    },
    {
        id: '5',
        text: '序列5'
    },
]

export default function DragEvent() {

    const [leftDragList, setleftDragList] = useState(list)
    const [rightDragList, setrightDragList] = useState([])
    const dataRef = useRef(null)

    // 定义初始化元素需要数据
    dataRef.current = {
        left: {
            callback: setleftDragList,
            list: leftDragList,
        },
        right: {
            callback: setrightDragList,
            list: rightDragList,
        }
    }

    // 拖拽元素在目标元素移动事件-阻止浏览器默认行为让目标元素成为可释放的目标元素
    const handleDragOver = e => e.preventDefault()

    // 拖拽完成事件-处理完成拖拽时的逻辑
    const handleDrop = (callback, arrow) => {
        return e => {
            const { dataset: { id }, classList } = e.target
            classList.remove('over')
            const curData = JSON.parse(e.dataTransfer.getData('itemData'))

            callback(preData => {
                const mapPreData = JSON.parse(JSON.stringify(preData)).filter(item => item.id !== curData.id)
                if (!id) return [...mapPreData, curData]

                const index = mapPreData.findIndex(item => item.id === id)
                mapPreData.splice(index, 0, curData)
                return mapPreData
            })

            if (arrow === 'left') setrightDragList(preData => preData.filter(item => item.id !== curData.id))
            else setleftDragList(preData => preData.filter(item => item.id !== curData.id))
        }
    }

    // 拖拽元素进入目标元素时触发事件-为目标元素添加拖拽元素进入时的样式效果
    const handleDragEnter = e => e.target.classList.add('over')

    // 拖拽元素离开目标元素时触发事件-移除目标元素的样式效果
    const handleDragLeave = e => e.target.classList.remove('over')

    // 拖拽开始时触发事件-通过dataTransfer对象设置所需要的数据
    const handleDragStart = data => e => e.dataTransfer.setData('itemData', JSON.stringify(data))

    return (
        <div className="dragEvent-wrap">
            {
                Object.entries(dataRef.current).map(([key, { callback, list }]) => {
                    return (
                        <div
                            key={key}
                            className="content-wrap"
                            onDragOver={handleDragOver}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop(callback, key)}
                        >
                            {
                                list.map(item =>
                                (<div
                                    className="item-text"
                                    key={item.id}
                                    data-id={item.id}
                                    // draggable 属性设置元素为可拖拽元素
                                    draggable
                                    onDragStart={handleDragStart(item)}
                                >
                                    {item.text}
                                </div>))
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

/**
 * 前言
在平时开发中会有一些涉及到通过拖拽效果完成的业务需求，那么我们就需要了解和学习拖拽相关的知识，在html5中就有原生的拖拽api，下面就来使用这些api实现一个灵活拖拽的demo。
拖拽流程
简单来说完成拖拽一共需要三步： 开始拖拽 -> 拖拽中 -> 结束拖拽。
在这些步骤中又会有许多更细节的步骤需要处理，完整流程如下：
1、设置指定元素为可拖拽元素（使用draggable属性，只有设置了draggable属性，元素才可以被拖动）
2、点击拖拽元素开始进行拖拽并监听拖拽开始事件（设置拖拽相关数据等）
3、监听拖拽移动时的事件
4、监听拖拽元素目标元素移入目标元素事件(处理进入目标元素时的操作，如添加进入目标元素时的效果等)
5、监听拖拽元素在目标元素上移动的事件（处理移动中的一些操作，如组织默认事件等）
6、在目标元素上松开拖拽元素完成拖拽（处理拖拽完成时的操作）
注意: 完成拖拽效果的步骤如上所述，每一步监听相应的事件后都会做一些处理，如存储数据等（上述监听事件有些是非必须使用的，根据自己功能选择性使用）。

拖拽api
拖拽元素触发事件

事件	      触发时刻
dragstart	  当用户开始拖拽一个元素时触发
drag	      拖拽元素被拖拽时连续触发
dragend	    当拖拽操作结束时触发

目标元素触发事件
事件	      触发时刻
dragenter	  当拖拽元素进入目标元素时触发
dragover	  当拖拽元素在目标元素上拖拽时触发（每一百毫秒触发一次）
dragleave	  当拖拽元素移出目标元素时触发
drop	      当拖拽元素在拖放目标元素上释放时触发

注意：
1、dragover事件下需阻止浏览器默认行为让目标元素成为可释放的目标元素。
2、当从操作系统向浏览器中拖拽文件时，不会触发 dragstart 和dragend 事件。

DataTransfer对象
定义
在我们进行拖拽事件的过程中会涉及到数据的流动，用于元素之间功能的实现。
DataTransfer 对象就是用于保存拖动并放下（drag and drop）过程中的数据。
它不但可以保存一项或多项数据，而且这些数据项可以是一种或者多种数据类型。

属性
属性	        描述
dropEffect	  获取当前选定的拖放操作类型或者设置的为一个新的类型。通常决定浏览器如何显示鼠标光标并控制拖放操作。值必须为 none, copy, link 或 move。
effectAllowed 指定允许的操作类型。值必须是none, copy, copyLink, copyMove, link, linkMove, move, all or uninitialized 之一。（默认为uninitialized 允许所有操作)）
files	        包含拖动中可用的所有本地文件的列表。从操作系统向浏览器拖放文件时用到（如果拖动操作不涉及拖动文件，则此属性为空列表）。
types（只读）  保存DataTransfer对象中设置的所有数据类型.
items（只读）  拖动操作中 数据传输项的列表。

方法
方法	                  描述
setData(format, data)   以键值对形式设置给定类型的数据。(format通常为数据格式,如text,text/html。如果该类型的数据不存在，则将其添加到末尾，以便类型列表中的最后一项将是新的格式。如果该类型的数据已经存在，则在相同位置替换现有数据。)
getData(format)	        获取设置的对应格式数据,format与setData()中一致。（如果该类型的数据不存在则返回空字符串。）
clearData(format)	      清除指定类型的数据。（如果类型为空或未指定，则删除与所有类型关联的数据。）
setDragImage(imgElement, x, y)	设置自定义的拖动图像
 */