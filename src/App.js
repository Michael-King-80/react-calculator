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
    </div>
  );
}

export default App;
