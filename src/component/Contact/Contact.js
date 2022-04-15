import React, { useState } from 'react';
import contact1 from './contact1.png';
import './Contact.css';
import { Flex, Link, Text } from '@chakra-ui/react';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = event => {
    const { name, value } = event.target;

    setData(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = event => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <Text fontSize={['1.5rem', '1.8rem', '2rem']}>Contact With Me</Text>
          </div>

          <Flex bg="gray.200" className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Akogwu Emmanuel</h1>
                  <p>
                    Web2 developer <br />
                    Web3 developer
                  </p>
                  <br />
                  <p>Phone: +234 8168035893</p>
                  <p>Email: akogwu.emmanuel24@gmial.com</p> <br />
                  <Flex
                    wrap="wrap"
                    gap="2rem"
                    justify="space-between"
                    className="button"
                  >
                    <Link href="github.com/akogwu24">
                      <button className="btn_shadow">
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </Link>
                    <Link href="github.com/akogwu24">
                      <button className="btn_shadow">
                        <i class="fa-brands fa-twitter"></i>
                      </button>
                    </Link>
                    <Link href="github.com/akogwu24">
                      <button className="btn_shadow">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </button>
                    </Link>
                  </Flex>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Contact;
