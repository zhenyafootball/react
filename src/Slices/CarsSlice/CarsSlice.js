import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../Services/carService";

export const getAllCars = createAsyncThunk(
    'carsSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)


export const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data)
            dispatch(addCar(newCar));
        } catch (e) {
        }

    }
);

export const deleteCarThunk = createAsyncThunk(
    'deleteCar/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
        }
    }
);

export const updateCar = createAsyncThunk(
    'carsSlice/updateCar',
    async ({id: {id}, data}, {dispatch}) => {
        try {
            await carService.updateById(id, data);
            dispatch(getAllCars())
        } catch (e) {
        }

    }
)

const carsSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        errors: null,
        carId: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        getCarId: (state, action) => {
            state.carId = action.payload;
        },

    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        }
    }
})

const carReducer = carsSlice.reducer;
export const {addCar, deleteCar, getCarId} = carsSlice.actions;
export default carReducer;