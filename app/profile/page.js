import Image from "next/image";
import classes from "./page.module.css";
import SidebarbgImg from "@/assets/images/user-bg.png";
import profileImg from "@/assets/images/user.png";
import telegramImg from "@/assets/images/telegram.png";
import discordImg from "@/assets/images/Discord.png";
import apiImg from "@/assets/images/apiImg.png";
import Link from "next/link";
import { Button } from "@/components";
import Head from "@/components/head/head";
import Card from "@/components/card/card";
import CardsWrapper from "@/sections/cards-wrapper/cards-wrapper";
import MainLayout from "../layouts/mainLayout";
const Page = () => (
  <MainLayout>
    <section className={classes.profile}>
    <div className="container-fluid">
      <div className={classes.inner}>
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 gx-0">
            <div className={classes.profile_inner}>
              <div className={classes.profile_media}>
                <Image src={SidebarbgImg} alt="profileImg" />
              </div>
              <div className={classes.user_info}>
                <div className={classes.profile_image}>
                  <Image src={profileImg} alt="img" />
                </div>
                <div className={classes.user_form}>
                  <div className={classes.profile_data}>
                    <label htmlFor="username">User Name</label>
                    <h3>Jean-Luc</h3>
                  </div>
                  <div className={classes.updated_btn}>
                    <Button className={classes.change_button}>Change</Button>
                  </div>
                </div>
                <div className={classes.user_form}>
                  <div className={classes.profile_data}>
                    <label htmlFor="email">Email</label>
                    <h3>Jeanluc@gmail.com</h3>
                  </div>
                  <div className={classes.updated_btn}>
                    <Button className={classes.change_button}>Change</Button>
                  </div>
                </div>
                <div className={classes.user_form}>
                  <div className={classes.profile_data}>
                    <label htmlFor="password">Password</label>
                    <h3>******</h3>
                  </div>
                  <div className={classes.updated_btn}>
                    <Button className={classes.change_button}>Change</Button>
                  </div>
                </div>

                <div className={classes.profile_bottom}>
                  <div className={classes.profile_list}>
                    <ul>
                      <li>
                        <Link href="">contact</Link>
                      </li>
                      <li>
                        <Link href="">
                          <Image src={telegramImg} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <Image src={discordImg} alt="img" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={classes.profile_btn_wrapper}>
                    <Button>
                      <Link href="/"> User guide</Link>
                    </Button>
                    <Button>
                      <Link href="/"> log out</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-9 col-lg-9 col-xl-9">
            <div className="user-inner">
              <Head />
              <CardsWrapper>
                <Card>
                  <h3>Balance</h3>
                  <p className="sky-fill">
                    <span className={classes.dollar_fill}>$</span> 42,069
                  </p>
                  <div className={classes.user_status_btn}>
                    <Button className={`${classes.btn_styling}`}>top up</Button>
                  </div>
                </Card>
                <Card>
                  <h3>Max Threads</h3>
                  <p>
                    <span className={classes.dollar_fill}>$</span> 42,069
                  </p>
                  <div className={classes.user_status_btn}></div>
                </Card>
                <Card>
                  <h3>Balance</h3>
                  <div className={classes.user_blur}>
                    <Image src={apiImg} alt="apiImg" />
                  </div>
                  <div className={classes.user_status_btn}>
                    <Button className={`${classes.btn_styling}`}>Reveal</Button>
                    <Button>Reset</Button>
                  </div>
                </Card>
              </CardsWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </MainLayout>
);
export default Page;
