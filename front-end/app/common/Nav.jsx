'use client';

import { useEffect } from 'react';

const Nav = () => {
    useEffect(() => {
        // 클라이언트에서만 실행되도록 보장
        if (typeof window !== 'undefined') {
            // 동적으로 부트스트랩을 로드하여 클라이언트 사이드에서만 사용
            import('bootstrap').then((bootstrap) => {
                // Bootstrap ScrollSpy 초기화
                const sideNav = document.querySelector('#sideNav');
                if (sideNav) {
                    new bootstrap.ScrollSpy(document.body, {
                        target: '#sideNav',
                        rootMargin: '0px 0px -40%',
                    });
                }

                // 네비게이션 토글 처리
                const navbarToggler = document.querySelector('.navbar-toggler');
                const responsiveNavItems = Array.from(
                    document.querySelectorAll('#navbarResponsive .nav-link')
                );

                const handleNavItemClick = () => {
                    if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                };

                responsiveNavItems.forEach((responsiveNavItem) => {
                    responsiveNavItem.addEventListener('click', handleNavItemClick);
                });

                // Clean up event listeners on component unmount
                return () => {
                    responsiveNavItems.forEach((responsiveNavItem) => {
                        responsiveNavItem.removeEventListener('click', handleNavItemClick);
                    });
                };
            }).catch((error) => {
                console.error('Bootstrap failed to load', error);
            });
        }
    }, []); // 빈 배열로 의존성 설정하여 처음 렌더링 시에만 실행

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger">
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/images/profile.jpg"/></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">소개</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">교육 & 자격증</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">기술 스택</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">경력</a></li>
                    <hr/>
                    <div className="social-icons">
                        <a className="social-icon" href="https://github.com/JangJuRi"><i className="fab fa-github"></i></a>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Nav