import Header from '../components/Header';
import FormQuestions from '../components/FormQuestions';
import FormResult from '../components/FormResult';

/**
 * Home Page of Green thumb
* */
const Home = {
  render: async () => {
    const header = await Header.render();
    const formQuestions = await FormQuestions.render();
    const formResult = await FormResult.render();

    return `
      <section class="top-content" id="top-content">
        <div class="container">
          ${header}
          ${formQuestions}
        </div>
      </section>
      <section class="bottom-content">
        <div class="container">
          ${formResult}
        </div>
        <iframe width='853' height='480' frameborder=0 allowfullscreen src='https://my.matterport.com/work/?m=GKYmXGXGBnT&back=1'></iframe>
      </section>
    `;
  },
  componentDidMount: async () => {
    FormQuestions.componentDidMount();
    FormResult.componentDidMount();
  },
};

export default Home;
