const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.json({
    status: 'success',
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  // if (!tour) {
  //   res.status(404).json({
  //     status: 'not successful',
  //   });
  // } else res.status(200).json(tour);
  // res.send('ok');
};

exports.createTour = async (req, res) => {
  const newTour = await Tour.create(req.body);
  res.status(200).json({
    status: 'success',

    data: {
      tour: newTour,
    },
  });
};

exports.updateTour = (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }

  res.status(200).json({
    status: 'success',

    data: {
      tour: 'update tour here',
    },
  });
};

exports.deleteTour = (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }

  res.status(204).json({
    status: 'success',

    data: 'null',
  });
};
