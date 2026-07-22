import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import './Script.css';
import settingImage from '../../assets/images/setting.svg';
import homeImage from '../../assets/images/home.svg';
import dinkusImage from '../../assets/images/dinkus.svg';
import clipImage from '../../assets/images/clip.svg';
import upImage from '../../assets/images/up.svg';
import downImage from '../../assets/images/down.svg';
import gridImage from '../../assets/images/grid.svg';
import lineImage from '../../assets/images/line.svg';
import searchImage from '../../assets/images/search.svg';

function Script() {

    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const [layout, setLayout] = useState("grid");

    const home = () =>
        navigate(`/home`)

    const [page, setPage] = useState(0);

    const maxPage = 9; //maxPage 찰 때마다 메인에 책 한 권씩 추가하기... 메인에 최대 몇 권 차게 할 것인지 생각하기...

    function up() { setPage(p => Math.min(maxPage, p + 1)) };
    function down() { setPage(p => Math.max(0, p - 1)) };

    const [text, setText] = useState("");
    const lines = text.split("\n");

    const focusAtEnd = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.focus();

        const end = textarea.value.length;
        textarea.setSelectionRange(end, end);
    };
    const blockedKeys = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
    ];

    const toggleLayout = () => {
        setLayout((prev) => (prev === 'grid' ? 'line' : 'grid'));
    };

    return (
        <>

            <div className="script-container">
                <div className="setting">
                    <img className="script-setting-button"
                        src={settingImage}
                        alt="settings" />
                </div>
                <div className="script-logo-container">
                    <img className="script-home"
                        src={homeImage}
                        onClick={home}
                        alt="home button"
                    />
                    <img className="script-logo"
                        src={dinkusImage}
                        onClick={home}
                        alt="dinkus" />
                    <div className="script-subtitle">
                        <p>SCRIPT TIME</p>
                    </div>
                </div>
                <div className="script-papers-container">
                    <div className="script-clip-container">
                        <img className="script-clip"
                            src={clipImage}
                            alt="clip"
                        />
                    </div>
                    <div className="script-content-change-button">
                        <div className="script-up-button-container">
                            <img className="script-up-button-img"
                                src={upImage}
                                alt="up button"
                                onClick={() => up()}
                            />
                        </div>
                        <div className="script-down-button-container">
                            <img className="script-down-button-img"
                                src={downImage}
                                alt="down button"
                                onClick={() => down()}
                            />
                        </div>
                    </div>

                    <div className="script-content-container">
                        <div className="script-layout-with-search-box">
                            <img className="script-grid-img"
                                src={layout === "grid" ? gridImage : lineImage}
                                alt={layout === "grid" ? "grid layout button" : "line layout button"}
                                onClick={toggleLayout}
                            />
                            <img className="script-search-img"
                                src={searchImage}
                                alt="search button"
                            />
                        </div>
                        <label
                            className="script-write-placeholder"
                            htmlFor="script-write-textarea"
                        >
                            {text ? "이어서 쓰기" : "여기에 글을 입력하세요."}
                        </label>
                        <div className="script-write-box" onClick={focusAtEnd}>
                            <textarea
                                ref={textareaRef}
                                id="script-write-textarea"
                                className="script-write-textarea"
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.nativeEvent.isComposing) return;

                                    if (blockedKeys.includes(event.key)) {
                                        event.preventDefault();

                                        const textarea = event.currentTarget;
                                        const end = textarea.value.length;
                                        textarea.setSelectionRange(end, end);
                                    }
                                }}
                                spellCheck={false}
                                autoCorrect="off"
                                autoCapitalize="off"
                                placeholder="여기에 글을 입력하세요."
                            />
                            <div className="script-preview-inline-block">
                                <div className={`script-preview-container script-${layout}-layout`} >
                                    {lines.map((line, lineIndex) => (
                                        <div className="script-preview-line" key={`line-${lineIndex}`}>
                                            {line.length === 0 ? (
                                                <div className="script-empty-line" />
                                            ) : (
                                                line.split("").map((char, charIndex) => (
                                                    <div className={layout === "grid" ? "script-lines-square" : undefined} key={`char-${lineIndex}-${charIndex}`}>
                                                        <div className="script-word-line-out-box">
                                                            <div className={layout === "grid" ? "script-word-line-box" : undefined}>
                                                                <div className={
                                                                    layout === "grid"
                                                                        ? "script-word-box script-grid-word"
                                                                        : "script-word-box script-line-word"
                                                                }>
                                                                    {char}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="script-text-length-with-buttons">
                        <p className="script-text-count">{text.length}자</p>
                        <div className="script-button-box">
                            <button className="script-reset-button" type="reset" onClick={() => setText("")}>초기화</button>
                            <button className="script-save-button" type="submit" onClick={() => alert(text)}>저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Script;

// 작성 중에는 마지막 글자부터만 이어 쓸 수 있어요.

// 수정 기능 완성하면
// 끝에서만 이어 쓸 수 있어요
// 작성 중에는 마지막 글자부터 입력돼요. 앞부분은 저장 후 수정 화면에서 고칠 수 있어요.