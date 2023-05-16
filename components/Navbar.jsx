import React, { useEffect, useState } from 'react'

import { RiMenu5Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { Link as Scroll } from 'react-scroll';
import NavStyles from '../styles/components/Navbar.module.scss'

import Link from 'next/link';
import { zeyada } from '@/util/fonts'

function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {

    if (window.pageYOffset > 10) {
      setActive(true)
    } else {
      setActive(false)
    }

    const scrollNav = () => {
      if (window.scrollY > 10) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    document.addEventListener('scroll', scrollNav);

  }, []);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <nav className={!active ? (NavStyles.navbar) : (`${NavStyles.navbar} ${NavStyles.active}`)}>
      <div className={NavStyles.container}>
        <div className={NavStyles.navWrapper}>
          <div className={NavStyles.left}>
            <Link href="/">
              <div className={NavStyles.logo}></div>
            </Link>
          </div>
          <div>
            <div className={NavStyles.mobToggle}>
              <Link href="/contact">
                <MdMail className={NavStyles.phoneIcon} />
              </Link >
              <RiMenu5Fill onClick={handleOpen} className={NavStyles.toggleIcon} />
            </div>
          </div>
          <div className={!open ? (NavStyles.right) : (`${NavStyles.right} ${NavStyles.open}`)}>
            <AiOutlineClose className={NavStyles.menuClose} onClick={handleOpen} />
            <ul className={NavStyles.menuList}>
              <li className={NavStyles.menuItem}>
                <Scroll smooth spy={true} activeClass={NavStyles.activeNavLink} to="home" onClick={handleOpen}>
                  Home
                </Scroll>
              </li>
              <li className={NavStyles.menuItem}>
                <Scroll smooth spy={true} activeClass={NavStyles.activeNavLink} to="about" offset={-100} onClick={handleOpen}>
                  About
                </Scroll>
              </li>
              <li className={NavStyles.menuItem}>
                <Scroll smooth spy={true} activeClass={NavStyles.activeNavLink} to="pricing" offset={-100} onClick={handleOpen}>
                  Pricing
                </Scroll>
              </li>
              <li className={NavStyles.menuItem}>
                <Scroll smooth spy={true} activeClass={NavStyles.activeNavLink} to="tutors" offset={-100} onClick={handleOpen}>
                  Tutors
                </Scroll>
              </li>
              <li className={NavStyles.menuItem}>
                <Scroll smooth spy={true} activeClass={NavStyles.activeNavLink} to="contact" offset={-100} onClick={handleOpen}>
                  Contact
                </Scroll>
              </li>
            </ul>
            <span className={NavStyles.contactBtn}>
              <Link href="/contact">
                Get in Touch
              </Link>
            </span>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar