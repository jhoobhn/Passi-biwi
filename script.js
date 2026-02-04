body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Soft Romantic Gradient */
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    font-family: 'Arial', sans-serif;
    overflow: hidden;
}

.container {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
}

.gif {
    width: 200px;
    margin-bottom: 20px;
}

h1 {
    color: #ff1e56;
    font-size: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.btn-group {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
}

button {
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

#yesBtn {
    background-color: #ff1e56;
    color: white;
    font-weight: bold;
}

#noBtn {
    background-color: #ffffff;
    color: #ff1e56;
    position: absolute;
}

.hidden {
    display: none;
}
