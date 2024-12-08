'use client';

import {Fragment, useRef, useEffect} from 'react';

const Main = () => {
    const tooltipRefs = useRef([]);

    useEffect(() => {
        // 클라이언트에서만 실행되도록 보장
        if (typeof window !== 'undefined') {
            // 동적으로 부트스트랩을 로드하여 클라이언트 사이드에서만 사용
            import('bootstrap').then(({ Tooltip }) => {
                if (tooltipRefs.current) {
                    const instances = Array.from(tooltipRefs.current).map(
                        (el) => new Tooltip(el, { container: 'body', trigger: 'hover' })
                    );

                    // 컴포넌트 언마운트 시 Tooltip 정리
                    return () => {
                        instances.forEach((instance) => instance.dispose());
                    };
                }
            });
        }
    }, []);

    const tools = [
        { title: 'JAVA', src: '/assets/images/dev-tools/java.png' },
        { title: 'JSP', src: '/assets/images/dev-tools/jsp.png' },
        { title: 'Spring Boot', src: '/assets/images/dev-tools/spring_boot.png' },
        { title: 'HTML', src: '/assets/images/dev-tools/html.png' },
        { title: 'CSS', src: '/assets/images/dev-tools/css.png' },
        { title: 'JS', src: '/assets/images/dev-tools/js.png' },
        { title: 'Vue.js', src: '/assets/images/dev-tools/vue.png' },
        { title: 'Nuxt.js', src: '/assets/images/dev-tools/nuxt.png' },
        { title: 'MariaDB', src: '/assets/images/dev-tools/maria.png' },
        { title: 'MySQL', src: '/assets/images/dev-tools/mysql.png' },
        { title: 'ORACLE', src: '/assets/images/dev-tools/oracle.png' },
        { title: 'GitHub', src: '/assets/images/dev-tools/github.png' },
        { title: 'GitLab', src: '/assets/images/dev-tools/gitlab.png' },
    ];

    const studyTools = [
        { title: 'ORACLE', src: '/assets/images/dev-tools/python.png' },
        { title: 'Django', src: '/assets/images/dev-tools/django.png' },
        { title: 'React', src: '/assets/images/dev-tools/react.png' },
        { title: 'Next.js', src: '/assets/images/dev-tools/next.png' },
        { title: 'AWS', src: '/assets/images/dev-tools/aws.png' },
    ];

    const devtools = [
        { title: 'IntelliJ', src: '/assets/images/dev-tools/intellij.png' },
        { title: 'DBeaver', src: '/assets/images/dev-tools/dbeaver.png' },
        { title: 'VSCode', src: '/assets/images/dev-tools/vscode.png' },
        { title: 'MobaXterm', src: '/assets/images/dev-tools/mobaxterm.jpg' },
        { title: 'Figma', src: '/assets/images/dev-tools/figma.png' },
        { title: 'Postman', src: '/assets/images/dev-tools/postman.png' },
        { title: 'Bruno', src: '/assets/images/dev-tools/bruno.png' },
        { title: 'NotePad++', src: '/assets/images/dev-tools/notepad.png' },
    ];

    return (
        <Fragment>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        <span className="job-text">웹 개발자</span>
                        <span className="text-primary ms-3">장주리</span>
                    </h1>
                    <div className="subheading mb-5">
                        #끈기 #성실 #자기개발
                    </div>
                    <p className="lead mb-5">
                        안녕하세요, 더 나은 웹 개발자가 되기 위해 꾸준히 노력하는 장주리입니다.<br/>
                        저의 강점인 끈기와 성실함으로 이전 회사에서 근무하는 동안 정보처리기사와 SQLD 자격증을 취득했으며, 더 깊은 학문적 성장을 위해 방송통신대학교에 편입해 졸업까지
                        단 한 번의 중단 없이 완주했습니다.<br/><br/>
                        저는 새로운 기술을 배우는 것에 큰 흥미를 느낍니다. 근무 당시 기존에 JSP로 이루어져있던 자사 서비스를 동료들과 공부하여 Vue.js+Spring boot로 바꿔
                        적용해 본 경험이 있습니다. 또한 파이썬에 관심이 생겼을 때는 개인적으로 작은 게시판 프로젝트를 만들어 보기도 했고, 현재는 React.js+jpa를 공부중입니다.<br/><br/>
                        지금까지의 경험과 자세를 바탕으로 새로운 곳에서 더 큰 도전과 성장을 이루고 싶습니다.
                    </p>
                </div>
                <div className="user-info-list">
                    <span><strong>경력<i className="bi bi-building-fill"/></strong>개발 5년차 (2020.10 ~ )</span>
                    <span><strong>나이<i className="bi bi-person-fill"/></strong>2000년생</span>
                    <span><strong>연락처<i className="bi bi-telephone-fill"/></strong>010-5188-3109</span>
                    <span><strong>주소<i className="bi bi-house-fill"/></strong>서울시 구로구 오류동</span>
                </div>
            </section>

            <hr className="m-0"/>

            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h3 className="text-primary mb-5">자격증</h3>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-file-medical-fill me-1"/>정보처리기사</h4>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2024.09</span>
                            <span className="text-primary ms-2">취득</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-file-medical-fill me-1"/>SQLD</h4>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2021.04</span>
                            <span className="text-primary ms-2">취득</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-file-medical-fill me-1"/>정보처리산업기사</h4>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2020.06</span>
                            <span className="text-primary ms-2">취득</span>
                        </div>
                    </div>

                    <hr/>

                    <h3 className="text-primary mb-5 mt-5">학력</h3>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-bank2 me-1"/>한국방송통신대학교</h4>
                            <div className="subheading mb-3">컴퓨터과학과</div>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2021.03 ~ 2023.02</span>
                            <span className="text-primary ms-2">졸업</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-bank2 me-1"/>한국폴리텍대학</h4>
                            <div className="subheading mb-3">컴퓨터정보과</div>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2018.03 ~ 2020.02</span>
                            <span className="text-primary ms-2">졸업</span>
                        </div>
                    </div>

                    <hr/>

                    <h3 className="text-primary mb-5 mt-5">교육</h3>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h4 className="mb-0"><i className="bi bi-backpack3-fill"/>웹 콘텐츠 개발을 위한 응용SW엔지니어링 양성</h4>
                            <div className="subheading mb-3">중앙HTA</div>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-secondary">2020.03 ~ 2020.09</span>
                            <span className="text-primary ms-2">수료</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="m-0"/>

            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h3 className="text-primary mb-5 mt-5">기술 스택 - 실무</h3>
                    <ul className="list-inline dev-icons">
                        {tools.map((tool, index) => (
                            <a
                                key={`tool-${index}`} // 고유한 key 설정
                                ref={(el) => (tooltipRefs.current[index] = el)} // 동적으로 ref 할당
                                data-bs-toggle="tooltip"
                                title={tool.title}
                            >
                                <img className="tech-icon" src={tool.src} alt={tool.title}/>
                            </a>
                        ))}
                    </ul>

                    <hr/>

                    <h3 className="text-primary mb-5 mt-5">기술 스택 - 스터디</h3>
                    <ul className="list-inline dev-icons">
                        {studyTools.map((tool, index) => (
                            <a
                                key={`studyTool-${index}`} // 고유한 key 설정
                                ref={(el) => (tooltipRefs.current[tools.length + index] = el)} // tools.length를 더해서 인덱스가 겹치지 않도록 함
                                data-bs-toggle="tooltip"
                                title={tool.title}
                            >
                                <img className="tech-icon" src={tool.src} alt={tool.title}/>
                            </a>
                        ))}
                    </ul>

                    <hr/>

                    <h3 className="text-primary mb-5 mt-5">개발 도구</h3>
                    <ul className="list-inline dev-icons">
                        {devtools.map((tool, index) => (
                            <a
                                key={`devTool-${index}`} // 고유한 key 설정
                                ref={(el) => (tooltipRefs.current[tools.length + studyTools.length + index] = el)} // 앞서 사용된 인덱스 길이를 더하여 겹치지 않도록 함
                                data-bs-toggle="tooltip"
                                title={tool.title}
                            >
                                <img className="tech-icon" src={tool.src} alt={tool.title}/>
                            </a>
                        ))}
                    </ul>
                </div>

            </section>

            <hr className="m-0"/>

            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
                                of the day, going forward, a new normal that has evolved from generation X is on the
                                runway heading towards a streamlined cloud solution. User generated content in real-time
                                will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                                Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
                                immersion along the information highway will close the loop on focusing solely on the
                                bottom line.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Junior Web Designer</h3>
                            <div className="subheading mb-3">Shout! Media Productions</div>
                            <p>Podcasting operational change management inside of workflows to establish a framework.
                                Taking seamless key performance indicators offline to maximise the long tail. Keeping
                                your eye on the ball while performing a deep dive on the start-up mentality to derive
                                convergence on cross-platform integration.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">July 2010 - December 2011</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Design Intern</h3>
                            <div className="subheading mb-3">Shout! Media Productions</div>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                                procrastinate B2C users after installed base benefits. Dramatically visualize customer
                                directed convergence without revolutionary ROI.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main