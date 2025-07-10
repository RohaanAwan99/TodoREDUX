import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { AddTask, RemoveTask } from './redux/action';
import { store } from './redux/store';

const { width, height } = Dimensions.get('screen');

const MainScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todo);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(AddTask(text));
      setText('');
    }
  };

  const handleRemove = (id) => {
    dispatch(RemoveTask(id));
  };

  const RenderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text>{item.text}</Text>
      <Pressable onPress={() => handleRemove(item.id)}>
        <Text style={styles.removeText}>Remove</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.todoText}>Todo List</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            placeholder="Add your task"
            value={text}
            onChangeText={setText}
          />
          <Pressable style={styles.AddButton} onPress={handleSubmit}>
            <Text style={{ fontWeight: 'bold', fontSize: width * 0.07 }}>+</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: height * 0.05,
  },
  mainContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  todoText: {
    color: '#58d68d',
    fontWeight: 'bold',
    fontSize: width / 16,
  },
  input: {
    backgroundColor: '#eee',
    height: width * 0.1,
    width: width * 0.86,
    borderRadius: 12,
    paddingLeft: 8,
  },
  AddButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#58d68d',
    height: width * 0.1,
    width: width * 0.1,
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  removeText: {
    color: 'red',
    marginTop: 5,
  }
});