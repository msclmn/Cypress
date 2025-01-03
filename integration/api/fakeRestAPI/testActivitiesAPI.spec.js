const { ActivitiesClient } = require('../../../support/APIClient/fakeRestAPI/ActivitiesClient');

describe('Activities API Tests', () => {

  it('Get all activities', () => {
    const activitiesClient = new ActivitiesClient();
    activitiesClient.getActivities().then((activities) => {
      expect(activities).to.not.be.null;
      expect(Array.isArray(activities)).to.be.true;
      expect(activities.length).to.be.greaterThan(0);
      activities.forEach((activity) => {
        expect(activity).to.have.property('id');
        expect(activity).to.have.property('title');
        expect(activity).to.have.property('dueDate');
        expect(activity).to.have.property('completed');
      });
    });
  });

  for (let id = 1; id <= 30; id++) {
    it(`Get Activity by Id = ${id}`, () => {
      const activitiesClient = new ActivitiesClient();
      activitiesClient.getActivityById(id).then((activityById) => {
        expect(activityById).to.not.be.null;
        expect(activityById).to.have.property('id', id);
        expect(activityById).to.have.property('title', `Activity ${id}`);
        expect(activityById).to.have.property('dueDate');
        if (id % 2 === 0) {
          expect(activityById).to.have.property('completed', true);
        } else {
          expect(activityById).to.have.property('completed', false);
        }
      });
    });
  }

  for (let id = 1; id <= 30; id++) {
    it(`Put Activity by Id = ${id}`, () => {
      const activitiesClient = new ActivitiesClient();
      const title = `Automation API Test ${id}`;
      const completed = id % 2 === 0;

      activitiesClient.updateActivity(id, title, completed).then((putActivityById) => {
        expect(putActivityById).to.not.be.null;
        expect(putActivityById).to.have.property('id', id);
        expect(putActivityById).to.have.property('title', title);
        expect(putActivityById).to.have.property('dueDate');
        expect(putActivityById).to.have.property('completed', completed);
      });
    });
  }
});