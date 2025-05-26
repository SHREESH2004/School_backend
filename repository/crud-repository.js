export class SchoolRepo {
  constructor(model) {
    this.model = model;
  }
  async addSchool(data) {
    const { name, address, latitude, longitude } = data;
    if (
      !name || typeof name !== 'string' ||
      !address || typeof address !== 'string' ||
      isNaN(latitude) || latitude < -90 || latitude > 90 ||
      isNaN(longitude) || longitude < -180 || longitude > 180
    ) {
      throw new Error('Invalid input data for adding school');
    }
    return await this.model.create({ name, address, latitude, longitude });
  }
  async listSchools(userLat, userLng) {
    if (
      isNaN(userLat) || userLat < -90 || userLat > 90 ||
      isNaN(userLng) || userLng < -180 || userLng > 180
    ) {
      throw new Error('Invalid user coordinates');
    }
    const schools = await this.model.findAll();
    const toRad = deg => deg * (Math.PI / 180);

    function haversine(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }

    const schoolsWithDistance = schools.map(school => {
      const distance = haversine(userLat, userLng, school.latitude, school.longitude);
      return { ...school.toJSON(), distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    return schoolsWithDistance;
  }
}
