--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.4
-- Dumped by pg_dump version 9.6.2

-- Started on 2017-10-04 14:59:34 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 16386)
-- Name: User; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE "User" (
    id uuid NOT NULL,
    name character varying,
    password character varying,
    roles jsonb
);


ALTER TABLE "User" OWNER TO admin;

--
-- TOC entry 2210 (class 0 OID 16386)
-- Dependencies: 185
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY "User" (id, name, password, roles) FROM stdin;
61d7f2e3-3387-4115-895e-b04a49967b27	admin	0f3477f71c65c7ac;7e21f7fe996f797973df579c9b2116b9de5cb7756cbbee30fca8a9a927d78854	["administrator"]
75cb3dae-2a18-4112-8042-cf69198d1639	exampleuser	e297c78cdfd696a8;0d047fbfb5d090b37f1ba35faff745440df0ea6777d96a6733e4e420b910a66e	["user"]
9de0c24b-e02e-4dc1-a5f7-3cdb1f474f7e	operator	3370ab41862a183c;17c1f3cd85ee7f5ae27e9f00e0ddd907151bf10ba0e90549c78f68fa7f93896f	["operator"]
\.


--
-- TOC entry 2092 (class 2606 OID 16393)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY "User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


-- Completed on 2017-10-04 14:59:34 CEST

--
-- PostgreSQL database dump complete
--

