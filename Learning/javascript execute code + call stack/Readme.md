
# JS Execution Phases 
## 1. Global Execution Context
## 2. Memory phase / Creation phase
## 3. Execution phase


### Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

### Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

### Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):

#### 1. Memory phase 
##### 2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Contex

![image](https://github.com/HAMZOO0/WEB-DEV/assets/98114762/57673862-b138-4825-bdc3-2c91f6ad723a)

![image](https://github.com/HAMZOO0/JavaScript-/assets/98114762/84d3d36c-3ae8-4c2d-933b-b88f82ff2529)
