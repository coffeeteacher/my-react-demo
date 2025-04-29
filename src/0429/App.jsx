import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export default function App() {
    const [activeQuestionId, setActiveQuestionId] = useState(null);
    // 折疊資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            answer: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            answer: "答案2",
        },
        {
            id: 3,
            question: "題目3",
            answer: "答案3",
        },
    ];

    return (
        <>
            {/* 最外層 */}
            <div className="wrapper" style={{
                backgroundColor: "black",
                maxWidth: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ccc",
            }}>
                {/* FAQ區 */}
                <div className="faq" style={{
                    backgroundColor: "gray",
                    width: "80%",
                    padding: "8px",
                    borderRadius: "5px",
                }}>
                    {/* 主標題 */}
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "10px",
                    }}>FAQ列表</h2>
                    {
                        // 帶出陣列資料
                        questions.map((q) => {
                            return (
                                <div key={q.id} style={{ marginBottom: "5px" }}>
                                    {/* QA按鈕 */}
                                    <button
                                        style={{
                                            width: "100%",
                                            textAlign: "left",
                                            borderRadius: "2px",
                                            border: "none",
                                            outline: "none",
                                            padding: "10px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            fontSize: "20px",
                                        }}
                                        onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
                                    >
                                        {/* 帶出題目 */}
                                        {q.question}
                                        {/* 加減號icon */}
                                        {
                                            activeQuestionId === q.id ? <FaMinusCircle /> : <FaPlusCircle />
                                        }
                                    </button>

                                    {/* 折疊鈕動畫 motion => https://motion.dev/docs/react-quick-start */}
                                    <AnimatePresence>
                                        {
                                            // 作用中的id跟被展開的id相同時
                                            activeQuestionId === q.id && (
                                                <motion.div
                                                    // 初始化
                                                    initial={{ opacity: 0, height: 0 }}
                                                    // 展開動畫
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    // 折疊動畫
                                                    exit={{ opacity: 0, height: 0 }}
                                                    // 外觀樣式
                                                    style={{ marginTop: "5px", color: "white", fontSize: "18px" }}
                                                >
                                                    {/* 答案 */}
                                                    {q.answer}
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}