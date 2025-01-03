const { ActivityModel } = require('../fakeRestAPI/ActivityModel');


class ActivitiesClient {
  constructor() {
    this.baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';
  }

  getActivities() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/Activities`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const activities = response.body;
      return activities.map(ActivityModel.fromApiResponse);
    });
  }

  getActivityById(id) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/Activities/${id}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const activity = response.body;
      return ActivityModel.fromApiResponse(activity);
    });
  }

  updateActivity(id, title, completed) {
    const updatedActivity = {
      id,
      title,
      completed,
    };

    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/Activities/${id}`,
      body: updatedActivity,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const activity = response.body;
      return ActivityModel.fromApiResponse(activity);
    });
  }
}

module.exports = { ActivitiesClient };