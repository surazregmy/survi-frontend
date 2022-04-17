import {
  Avatar,
  Button,
  Image,
  Input,
  Layout,
  Menu,
  message,
  Radio,
  Row,
  Space,
  Table,
} from "antd";
import {} from "@ant-design/icons";
import SurveyList from "../survey/survey-list";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import CreateSurvey from "../survey/create-survey";
import { SearchOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";
import ContentPage from "./content_page";

import AppHeader from "./lpcomp/header";
import AppFooter from "./lpcomp/footer";

import SideBar from "./sidebar";
import AppHero from "./lpcomp/landhero";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function TakeSurvey() {
  const { auth } = useAuth();

  let { id } = useParams();
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([]);

  async function fetchData() {
    const surveys = await axios.get("/surveys/get/" + id);
    setDataSource(surveys.data);
    console.log(surveys);
  }

  useEffect(() => {
    console.log("The id is" + id);
    fetchData();
  }, []);

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    await axios
      .post(
        "surveys/respond",
        {
          questionId: id,
          option: "option" + value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        message.success(
          "Response Recored! Thank you for filling up the survey"
        );
        navigate("/activeSurveys");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout className="mainLayout">
      <Header>
        <Menu
          justify="end"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="0">
            <Image width={50} src="/survi-logo.png" />
          </Menu.Item>
          <Menu.Item key="1">Home</Menu.Item>

          {auth.accessToken ? (
            <Menu.Item key="2">
              <Link to="/">Login</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          <Menu.Item key="3">
            {" "}
            <Link to="/activeSurveys">Active Surveys</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="survelist" style={{ height: "100vh", margin: "100px" }}>
          <Row justify="center">
            <h1>{dataSource.question}</h1>
          </Row>
          <Row justify="center">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>{dataSource.option1}</Radio>
              <Radio value={2}>{dataSource.option2}</Radio>
              <Radio value={3}>{dataSource.option3}</Radio>
              <Radio value={4}>{dataSource.option4}</Radio>
            </Radio.Group>
          </Row>
          <Row justify="center">
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Row>
        </div>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default TakeSurvey;
