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
        { title: 'JAVA', src: '/Resume/assets/images/dev-tools/java.png' },
        { title: 'JSP', src: '/Resume/assets/images/dev-tools/jsp.png' },
        { title: 'Spring Boot', src: '/Resume/assets/images/dev-tools/spring_boot.png' },
        { title: 'HTML', src: '/Resume/assets/images/dev-tools/html.png' },
        { title: 'CSS', src: '/Resume/assets/images/dev-tools/css.png' },
        { title: 'JS', src: '/Resume/assets/images/dev-tools/js.png' },
        { title: 'Vue.js', src: '/Resume/assets/images/dev-tools/vue.png' },
        { title: 'Nuxt.js', src: '/Resume/assets/images/dev-tools/nuxt.png' },
        { title: 'MariaDB', src: '/Resume/assets/images/dev-tools/maria.png' },
        { title: 'MySQL', src: '/Resume/assets/images/dev-tools/mysql.png' },
        { title: 'ORACLE', src: '/Resume/assets/images/dev-tools/oracle.png' },
        { title: 'GitHub', src: '/Resume/assets/images/dev-tools/github.png' },
        { title: 'GitLab', src: '/Resume/assets/images/dev-tools/gitlab.png' },
    ];

    const studyTools = [
        { title: 'Python', src: '/Resume/assets/images/dev-tools/python.png' },
        { title: 'Django', src: '/Resume/assets/images/dev-tools/django.png' },
        { title: 'React', src: '/Resume/assets/images/dev-tools/react.png' },
        { title: 'Next.js', src: '/Resume/assets/images/dev-tools/next.png' },
        { title: 'JPA', src: '/Resume/assets/images/dev-tools/jpa.png' },
        { title: 'AWS', src: '/Resume/assets/images/dev-tools/aws.png' },
    ];

    const devtools = [
        { title: 'IntelliJ', src: '/Resume/assets/images/dev-tools/intellij.png' },
        { title: 'DBeaver', src: '/Resume/assets/images/dev-tools/dbeaver.png' },
        { title: 'VSCode', src: '/Resume/assets/images/dev-tools/vscode.png' },
        { title: 'MobaXterm', src: '/Resume/assets/images/dev-tools/mobaxterm.jpg' },
        { title: 'Figma', src: '/Resume/assets/images/dev-tools/figma.png' },
        { title: 'Postman', src: '/Resume/assets/images/dev-tools/postman.png' },
        { title: 'Bruno', src: '/Resume/assets/images/dev-tools/bruno.png' },
        { title: 'NotePad++', src: '/Resume/assets/images/dev-tools/notepad.png' },
    ];

    const careers = [
        {
            title: '블록체인 DID 기반 디지털배지 K-에듀케이션 플랫폼 구축',
            company: '(주) 타임교육C&P',
            date: '2024.06 ~ 2024.10 (5개월)',
            summarys: [
                '게이미피케이션 기능 개발',
                'K-Openbadge API를 연동하여 오픈배지 지급 기능 개발'
            ],
            languages: [
                'JAVA', 'Spring Boot', 'JS', 'Vue.js', 'nuxt.js', 'MariaDB'
            ],
            content: '서비스 사용자 경험(UX) 향상을 위해 배지, 포인트, 레벨, 랭킹 등의 게이미피케이션 요소를 설계 및 구현하였습니다. 이를 통해 사용자 참여를 자연스럽게 유도하고 서비스 내 활동성 증가에 기여했습니다. ' +
                '추가적으로, K-OpenBadge API를 연동하여 디지털 배지를 자동으로 발급하고 관리하는 기능을 개발하였습니다. 외부 표준을 준수하여 상호 운용성을 강화함과 동시에 서비스 신뢰도와 유저 만족도를 높이는 데 기여했습니다.'
        },
        {
            title: '하나디지털캠퍼스 고도화',
            company: '하나은행',
            date: '2024.03 ~ 2024.04 (2개월)',
            summarys: [
                'LMS 평가(시험) 관련 기능 추가 개발'
            ],
            languages: [
                'JAVA', 'Spring Boot', 'JS', 'JSP', 'Oracle'
            ],
            content: 'LMS(Learning Management System) 내 평가(시험) 프로세스를 개선하기 위해 다양한 기능을 설계하고 구현하였습니다. 시험 도중 데이터를 안전하게 보호할 수 있도록 시험지 임시 저장 기능을 개발하여 응시자의 진행 상태를 유지할 수 있게 했습니다. ' +
                '또한, 시험 시간이 종료되면 자동 제출 기능이 작동하도록 로직을 설계하여 응시자의 편의성과 시스템 신뢰성을 동시에 강화했습니다. 이러한 기능 추가로 학습 관리 시스템의 사용성을 높이고, 효율적인 평가 환경을 제공하였습니다.'
        },
        {
            title: '하남시 진로진학플랫폼',
            company: '하남시',
            date: '2023.11 ~ 2024.02 (4개월)',
            summarys: [
                '커리어넷/공공데이터포털 API 연동',
                'JAVA Selenium을 사용한 웹 크롤링으로 대학 모집요강 다운로드 링크 추출'
            ],
            languages: [
                'JAVA', 'Spring Boot', 'JS', 'Vue.js', 'nuxt.js', 'MariaDB'
            ],
            content: '사용자에게 정확하고 신뢰성 있는 학교 및 학과 정보를 제공하기 위해 커리어넷 및 공공데이터포털 API를 연동하여 진학 관련 데이터를 수집하고 서비스에 통합하였습니다. 이를 통해 방대한 데이터를 효율적으로 관리하고, 사용자 친화적인 정보 탐색 환경을 구축하였습니다. ' +
                '추가적으로, Java Selenium을 활용한 웹 크롤링 기술을 적용하여 대학 모집요강 다운로드 링크를 자동으로 추출하는 기능을 구현하였습니다. 크롤링 프로세스를 최적화하여 최신 데이터를 빠르게 확보하고 유지보수 효율성을 높이는 데 기여했습니다.'
        },
        {
            title: '자사 솔루션 개발 (SAASDA)',
            company: '(주)윌비소프트',
            date: '2023.08 ~ 2024.11 (16개월)',
            summarys: [
                'LMS 시스템 구축 및 유지보수',
            ],
            languages: [
                'JAVA', 'Spring Boot', 'JS', 'Vue.js', 'nuxt.js', 'MySQL'
            ],
            content: '교육 및 학습 환경의 효율성을 극대화하기 위해 LMS(Learning Management System)를 설계, 구축, 유지보수하였습니다. 과정, 콘텐츠 관리 및 수료 기능을 포함한 핵심 기능을 구현하여 학습 관리를 체계적으로 지원하였습니다. ' +
                '또한, 사용자 참여와 동기를 유발하기 위해 배지, 포인트, 레벨, 랭킹 등 게이미피케이션 요소를 추가하여 서비스의 몰입도와 사용자 만족도를 높였습니다. ' +
                '프론트엔드 개발에는 Toast-Grid와 Toast-Editor를 도입하여 UI/UX를 개선하고, 학습 콘텐츠의 관리 및 데이터 처리 효율성을 강화하였습니다. 이를 통해 LMS의 사용성을 높이고 안정적인 유지보수 환경을 조성하는 데 기여했습니다.'
        },
        {
            title: '현대모비스 온라인교육시스템 개선',
            company: '현대모비스',
            date: '2023.04 ~ 2024.07 (4개월)',
            summarys: [
                '지식공유 오픈플랫폼 개발 (Toast Editor를 사용한 현대모비스 전용 위키)',
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'Oracle'
            ],
            content: '현대모비스의 지식공유를 위한 전용 오픈플랫폼을 개발하여 조직 내 정보 관리와 협업을 지원하였습니다. Toast-Editor를 활용하여 직관적이고 강력한 편집 환경을 제공하였으며, 아래와 같은 사용자 경험을 개선하는 다양한 기능을 추가했습니다. ' +
                '위키 단어별로 사용자 접근 및 수정 권한을 부여할 수 있는 기능을 구현하여 데이터 보안과 관리 효율성을 강화하였습니다. 또한, 에디터 내에서 유튜브 영상을 삽입할 수 있도록 지원하여 멀티미디어 콘텐츠를 활용한 풍부한 지식 공유가 가능해졌습니다. ' +
                '특히, 단어 드래그 및 입력 후 스페이스바를 통한 바로가기 링크 생성 기능을 구현하여 위키 단어 검색과 참조 과정을 혁신적으로 간소화했습니다. 이러한 기능은 플랫폼 사용성을 크게 높이고, 정보 검색 및 협업의 효율성을 강화하는 데 기여했습니다.'
        },
        {
            title: '에듀테크 기반 공군 학습플랫폼 재구축',
            company: '공군교육사령부',
            date: '2022.08 ~ 2023.03 (8개월)',
            summarys: [
                'LMS 시스템 구축 및 통계관리 개발',
            ],
            languages: [
                'JAVA', 'Spring Boot', 'JS', 'JSP', 'Vue.js', 'nuxt.js', 'Oracle'
            ],
            content: '군부대의 특수한 요구를 반영한 LMS(Learning Management System)를 설계, 구축하고, 효율적인 학습 및 통계 관리를 위한 기능을 개발하였습니다. 조직별 사용자 관리 기능을 통해 대규모 사용자 데이터를 체계적으로 관리할 수 있도록 했으며, 역할별로 메뉴 접근 권한을 세부적으로 설정할 수 있는 시스템을 구현하여 보안과 접근성을 동시에 강화했습니다. ' +
                '군부대 특화 요구사항을 반영하여 교본, 교보재 관리와 가산복무자 관리 등 특화 메뉴를 설계하고 적용하였습니다. 이를 통해 군부대 환경에 최적화된 학습 관리와 자원 활용이 가능해졌습니다. ' +
                'LMS와 통계 관리 기능의 통합을 통해 데이터 기반의 학습 분석 및 의사결정 지원이 가능하도록 하여 시스템의 활용성을 더욱 높였습니다.'
        },
        {
            title: '국립외교원 화상교육 S/W 개발 및 솔루션 도입',
            company: '국립외교원',
            date: '2021.12 ~ 2022.07 (8개월)',
            summarys: [
                'LMS 시스템 구축 및 인사연동',
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'Tibero'
            ],
            content: '조직 내 학습 관리와 인사 데이터의 효율적인 통합을 위해 LMS(Learning Management System)를 설계, 구축하고, 인사 연동 로직을 개발하였습니다. 인사 데이터를 LMS와 실시간으로 동기화하기 위해 스케줄링 기반 데이터 연동 로직을 구현하여 인사정보 변경 사항이 자동으로 반영되도록 설계하여 학습 및 인사 관리를 통합적으로 운영하는 데에 기여하였습니다. '
        },
        {
            title: 'DT Univ 디지털 통합 교육 플랫폼 구축',
            company: '하나금융티아이',
            date: '2021.11 ~ 2022.06 (8개월)',
            summarys: [
                'LMS 시스템 구축 및 게이미피케이션(보드게임) 개발',
                'BIZTALK (카카오톡/문자 알림 발송), UBIFORM (수료증 뷰어) API 연동'
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'MariaDB'
            ],
            content: '학습의 재미와 참여도를 높이기 위해 보드게임 형태의 게이미피케이션 기능을 LMS(Learning Management System)에 도입하였습니다. 사용자 학습 진행도와 성과에 따라 보드게임을 통해 피드백을 제공하며, 동기부여와 몰입도를 극대화하는 데 기여했습니다. ' +
                '또한, LMS와 외부 서비스의 연동성을 강화하기 위해 BIZTALK API를 활용하여 카카오톡 및 문자 알림 발송 기능을 구현하였으며, 학습 과정의 주요 알림과 공지를 효율적으로 전달할 수 있도록 지원하였습니다. ' +
                'UBIFORM API를 통해 수료증 뷰어 기능을 개발하여 사용자들이 손쉽게 수료증을 확인하고 출력할 수 있도록 설계하였습니다.'
        },
        {
            title: '자사 솔루션 고도화',
            company: '(주)윌비소프트',
            date: '2021.05 ~ 2021.10 (5개월)',
            summarys: [
                'LMS 시스템 개선',
                'Oracle → MySQL / iBatis → myBatis 마이그레이션'
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'Oracle'
            ],
            content: '약 10년간 유지된 기존 LMS(Learning Management System) 코드베이스를 개선하고 현대화하기 위해 대규모 마이그레이션 작업을 수행하였습니다. 데이터베이스를 Oracle에서 MySQL로 전환하며 데이터 구조 최적화 및 시스템 성능 향상을 이루었고, iBatis에서 MyBatis로의 프레임워크 마이그레이션을 통해 코드 가독성과 유지보수성을 크게 개선했습니다. ' +
                '기존 시스템의 복잡성과 장기 운영에 따른 제약을 극복하기 위해 단계별 마이그레이션 전략을 설계하고 데이터 무결성과 기능 호환성을 철저히 검증하였습니다. 이러한 개선 작업을 통해 LMS의 안정성과 확장성을 강화하여 조직의 장기적인 시스템 운영 효율성을 높였습니다.'
        },
        {
            title: '대교 써밋국어 교육시스템 구축',
            company: '(주)대교',
            date: '2021.01 ~ 2021.04 (4개월)',
            summarys: [
                '써밋 국어 시스템 2차 개발 보조 및 오류사항 수정 작업 수행',
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'MySQL'
            ],
            content: '써밋 국어 시스템의 2차 개발 과정에서 결함 수정 및 테스트 작업을 수행하여 시스템 안정성과 품질을 개선하였습니다. 개발 보조 역할로 기능 구현을 지원하며, 발견된 오류 사항을 신속히 분석하고 수정하여 정상적인 운영 환경을 유지할 수 있도록 기여했습니다. ' +
                '철저한 테스트를 통해 시스템의 결함 재발을 방지하고, 사용자 경험을 최적화하는 데 중점을 두어 프로젝트의 성공적인 완수를 도왔습니다.'
        },
        {
            title: '스마트 직업훈련 플랫폼(STEP) 2단계',
            company: '한국산업기술대학교',
            date: '2020.11 ~ 2021.01 (3개월)',
            summarys: [
                'STEP2 포털 시스템 개발 보조 및 오류사항 수정 작업 수행',
            ],
            languages: [
                'JAVA', 'Spring', 'JS', 'JSP', 'MySQL'
            ],
            content: '입사 후 처음 참여한 프로젝트로, STEP2 포털 시스템의 최종 개발 단계에서 결함 수정 및 테스트 작업을 수행하였습니다. 시스템의 안정적 출시를 목표로 오류 사항을 신속히 분석하고 수정하였으며, 철저한 테스트를 통해 품질을 개선하고 잔여 리스크를 최소화하는 데 기여했습니다. ' +
                '프로젝트 막바지에 투입되어 기존 코드를 빠르게 이해하고 문제 해결에 집중하며, 성공적인 시스템 론칭을 지원하였습니다.'
        }
    ]

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
                        저는 새로운 기술을 배우는 것에 큰 흥미를 느낍니다. 이전 회사에서 근무 당시, 기존에 JSP로 이루어져있던 자사 서비스를 Vue.js + Spring boot로 마이그 할 기회가 생겨 동료들과 공부하여
                        적용하며 성취감을 느꼈습니다. 또한 파이썬에 관심이 생겼을 때는 개인적으로 작은 게시판 프로젝트를 만들어 보기도 했고, 현재는 React + jpa를 공부중입니다.<br/><br/>
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
                            <h4 className="mb-0"><i className="bi bi-backpack3-fill"/>
                                웹 콘텐츠 개발을 위한 응용SW엔지니어링 양성

                                <a href="https://hrd.work24.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20180000221709&tracseTme=2&crseTracseSe=C0061&trainstCstmrId=&tracseReqstsCd=undefined&cstmConsTme=undefined#">
                                    <i className="bi bi-box-arrow-up-right ms-3"/>
                                </a>
                            </h4>
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
                    <h3 className="text-primary">경력</h3>
                    <span className="text-secondary">* 프로젝트 기간은 실제 개발 투입 기간입니다 (기획/디자인 등 사전 작업 기간 제외)</span>
                    <div className="career-form mt-6">
                        <div className="company-info">
                            <i className="bi bi-building-fill"/> (주) 윌비소프트
                            <span className="work-date">2020.10.20 ~ </span>
                            <span className="job-info">솔루션사업본부 대리</span>
                        </div>

                        <hr/>

                        {careers.map((career, careerIndex) => (
                            <div className="career-list d-flex flex-column flex-md-row justify-content-between mt-6 mb-6" key={careerIndex}>
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{ career.title }</h3>
                                    <div className="subheading mb-3">{ career.company }</div>
                                    {career.summarys.map((summary, summaryIndex) => (
                                        <div className="career-summary" key={summaryIndex}>
                                            { summary }
                                        </div>
                                    ))}
                                    <i className="bi bi-keyboard-fill text-primary me-2"/>
                                    {career.languages.map((language, languageIndex) => (
                                        <div className="career-language text-primary" key={languageIndex}>
                                            { language }
                                        </div>
                                    ))}
                                    <p className="mt-3">{ career.content }</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">{ career.date }</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Main