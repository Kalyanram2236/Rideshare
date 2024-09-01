%%writefile driver_dashboard.py
import streamlit as st
import requests

def driver_dashboard():
    st.title("Driver Dashboard")
    # Driver options like viewing ride requests, earnings, etc.
    if st.button("View Ride Requests"):
        response = requests.get(f"http://backend_api/ride_service/requests?driver_id={st.session_state['driver_id']}")
        st.write(response.json())
