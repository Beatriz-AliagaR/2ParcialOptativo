
import './App.css';

function App() {
  return (
    <>
    /**helper/note/active */
      <div class="card">
        <div class="card-header red">
          <div class="tittle">
            <div class="circle">1</div>
            <p>Agenda/Topic</p>
          </div>
          <div class="id">
            <p>SAAS-000</p>
          </div>
        </div>
        <div class="card-section">
          <p>Description of what is done here</p>
        </div>
        <div class="card-footer">
          <p>Last Updated</p>
          <p>3/8/2020</p>
        </div>
      </div>
    /**helper/note/future */
      <div class="card">
        <div class="card-header purple">
          <div class="tittle">
            <div class="circle">1</div>
            <p>Agenda/Topic</p>
          </div>
          <div class="id">
            <p>SAAS-000</p>
          </div>
        </div>
        <div class="card-section">
          <p>Description of what is done here</p>
        </div>
        <div class="card-footer">
          <p>Last Updateds</p>
          <p>3/8/2020</p>
        </div>
      </div>
    /**helper/note/completed */
      <div class="card">
        <div class="card_header gray">
          <div class="tittle">
            <div class="circle">1</div>
            <p>Agenda/Topic</p>
          </div>
          <div class="id">
            <p>SAAS-000</p>
          </div>
        </div>
        <div class="card_section">
          <p>Description of what is done here</p>
        </div>
        <div class="card_footer">
          <p>Last Updated</p>
          <p>3/8/2020</p>
        </div>
      </div>


    </>
  );
}

export default App;
