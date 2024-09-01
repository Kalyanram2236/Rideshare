%%writefile user_dashboard.py
import streamlit as st
import requests

def user_dashboard():
    st.title("User Dashboard")
    # User options like booking rides, checking history, etc.
    if st.button("Book a Ride"):
        # Logic for booking a ride
        response = requests.post("http://backend_api/ride_service/book", data={"user_id": st.session_state['user_id']})
        st.write(response.json())
