/**
 * Created by Edge on 2/25/2017.
 */

import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="Profile-page">
        <h1>Organization Profile</h1>
        <table>
          <thead>
          <tr>
            <th>Name of NGO:</th>
            <th>Powerful Hands</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Acronym:</td>
            <td>PH</td>
          </tr>
          <tr>
            <td>Registered Address:</td>
            <td>Dallu Aawas, Swoyambhu</td>
          </tr>
          <tr>
            <td>Telephone:</td>
            <td>977-01-6923177</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>powerfullhands@gmail.com</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>www.powerfulhands.org.np</td>
          </tr>
          <tr>
            <td>Founder:</td>
            <td>
              <ul>
                <li>Vijay Khadgi (President)</li>
                <li>Shailaja Kasaju (Vice-President)</li>
                <li>Sapna Nakarmi (Treasurer)</li>
                <li>Ineej Manandhar (Secretary)</li>
                <li>Amir Man Bajracharya (Event Co-ordinator)</li>
                <li>Reena Rauniyar (Health Co-ordinator)</li>
                <li>Annal Kumar Pradhan (PR)</li>
                <li>Nabin Man Baidya (IT)</li>
                <li>Ijan Man Piya (Fund Raiser)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Year of Establishment:</td>
            <td>2011</td>
          </tr>
          <tr>
            <td>SWC:</td>
            <td>33460</td>
          </tr>
          <tr>
            <td>Registration:</td>
            <td>209/067/068</td>
          </tr>
          <tr>
            <td>Areas of Work:</td>
            <td>
              <ul>
                <li>Health</li>
                <li>Education</li>
                <li>Environment</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Focus Areas:</td>
            <td>Kathmandu Valley</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProfilePage;
