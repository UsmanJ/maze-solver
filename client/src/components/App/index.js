import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetMazeArray, solveMaze, updateProperty } from '../../state/actions/mazeActions';
import styles from './style.css';

class App extends Component {
  handleChange = (field, value) => {
    this.props.updateProperty(field, value);
  };

  solveMaze = () => {
    const { maze: { mazeArray, startX, startY } } = this.props;
    this.createMazeArray(mazeArray).then((newArr) => {
      this.props.solveMaze(newArr, parseInt(startX, 10), parseInt(startY, 10));
    });
  };

  createMaze = (solution) => {
    if (solution) {
      const rows = solution.map((item) => {
        const i = item.map(j => <td> {j} </td>);
        return <tr> {i} </tr>;
      });
      return (
        <table className="table-hover table-striped table-bordered">
          <tbody>{rows}</tbody>
        </table>
      );
    }
    return null;
  };

  createMazeArray = mazeArray =>
    new Promise((resolve, reject) => {
      this.props.resetMazeArray();
      const lines = document.getElementById('textareaId').innerHTML.split('\n');

      /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
      for (let i = 0; i < lines.length; i++) {
        const array = lines[i].split('');

        mazeArray.push(array);
      }
      resolve(mazeArray);

      if (mazeArray.length === 0) {
        reject();
      }
    });

  render() {
    const { maze: { maze, mazeArray, solution, startX, startY } } = this.props;
    return (
      <div className="container">
        <div className="jumbotron">
          <h2 className="display-3 centr text-center">Welcome to the Maze App</h2>
        </div>
        <div>
          <p className="lead">Input a maze of your choice</p>
          <p className="lead">Use the following symbols to represent each step of the maze</p>
          <div>
            <p className="lead">{'X'} = Blocked path</p>
            <p className="lead">{'.'} = Open path</p>
            <p className="lead">{'G'} = End of maze</p>
          </div>
        </div>

        <div>
          <div className={styles.textArea}>
            <textarea
              className={styles.textBox}
              id="textareaId"
              value={maze}
              onChange={({ target: { value } }) => this.handleChange('maze', value)}
            />
          </div>
          <div className={styles.solutionArea}>{this.createMaze(solution)}</div>
        </div>
        <br />
        <div>
          <label htmlFor="startPointX">Enter start point on the X axis</label>
          <input
            id="startPointX"
            type="number"
            value={startX}
            onChange={({ target: { value } }) => this.handleChange('startX', value)}
          />{' '}
          <br />
          <label htmlFor="startPointY">Enter start point on the Y axis</label>
          <input
            id="startPointY"
            type="number"
            value={startY}
            onChange={({ target: { value } }) => this.handleChange('startY', value)}
          />
        </div>

        <button className="btn btn-lg btn-success" onClick={() => this.solveMaze(mazeArray)}>
          Solve Maze
        </button>
      </div>
    );
  }
}

App.propTypes = {
  maze: PropTypes.shape().isRequired,
  solveMaze: PropTypes.func.isRequired,
  resetMazeArray: PropTypes.func.isRequired,
  updateProperty: PropTypes.func.isRequired,
};

const mapStateToProps = ({ maze }) => ({ maze });
const mapDispatchToProps = {
  resetMazeArray,
  solveMaze,
  updateProperty,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
