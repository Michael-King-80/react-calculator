import "./App.css";

function clr() {
  document.getElementById("result").value = "";
}
function tax(a) {
  document.getElementById("result").value += a;
}
function solve() {
  var p = document.getElementById("result").value;
  // eslint-disable-next-line no-eval
  var q = eval(p);
  document.getElementById("result").value = q;
}

function App() {
  return (
    <div className="body">
      <table>
        <tr>
          <td colSpan="3">
            <input type="text" id="result" />
          </td>
          <td>
            <input type="button" value="c" onClick={() => clr()} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" onClick={() => tax(1)} />
          </td>
          <td>
            <input type="button" value="2" onClick={() => tax(2)} />
          </td>
          <td>
            <input type="button" value="3" onClick={() => tax(3)} />
          </td>
          <td>
            <input type="button" value="/" onClick={() => tax("/")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" onClick={() => tax(4)} />
          </td>
          <td>
            <input type="button" value="5" onClick={() => tax(5)} />
          </td>
          <td>
            <input type="button" value="6" onClick={() => tax(6)} />
          </td>
          <td>
            <input type="button" value="*" onClick={() => tax("*")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="7" onClick={() => tax(7)} />
          </td>
          <td>
            <input type="button" value="8" onClick={() => tax(8)} />
          </td>
          <td>
            <input type="button" value="9" onClick={() => tax(9)} />
          </td>
          <td>
            <input type="button" value="+" onClick={() => tax("+")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="-" onClick={() => tax("-")} />
          </td>
          <td>
            <input type="button" value="0" onClick={() => tax(0)} />
          </td>
          <td>
            <input type="button" value="." onClick={() => tax(".")} />
          </td>
          <td>
            <input type="button" value="=" onClick={() => solve()} />
          </td>
        </tr>
      </table>
      <button>hello</button>
      {/* <table>
        <section>
          <div class="container">
            <div id="display"></div>
            <div class="buttons">
              <div class="buttons">
                <div class="button">C</div>
                <div class="button">/</div>
                <div class="button">*</div>
                <div class="button">&larr;</div>
                <div class="button">7</div>
                <div class="button">8</div>
                <div class="button">9</div>
                <div class="button">-</div>
                <div class="button">4</div>
                <div class="button">5</div>
                <div class="button">6</div>
                <div class="button">+</div>
                <div class="button">1</div>
                <div class="button">2</div>
                <div class="button">3</div>
                <div class="button">.</div>
                <div class="button">(</div>
                <div class="button">0</div>
                <div class="button">)</div>
                <div id="equal" class="button">
                  =
                </div>
              </div>
            </div>
          </div>
        </section>
      </table> */}
    </div>
  );
}

export default App;
