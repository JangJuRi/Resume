'use client';

import {useRouter} from 'next/navigation';

const Nav = () => {
    const router = useRouter()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger">
                <span className="d-block d-lg-none">Clarence Taylor</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                                                         src="assets/img/profile.jpg" alt="..."/></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" onClick={() => router.push('/Board')}>About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger">Experience</a>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger">Education</a>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger">Interests</a>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger">Awards</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav